
import { useContext, useEffect, useState } from "react"; 
import { useParams } from 'react-router-dom';
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  // Define a schedule for different days of the week
  const weeklySchedule = {
    SUN: { start: "10:00", end: "14:00" },
    MON: { start: "09:00", end: "17:00" },
    TUE: { start: "09:00", end: "17:00" },
    WED: { start: "09:00", end: "17:00" },
    THU: { start: "09:00", end: "17:00" },
    FRI: { start: "09:00", end: "17:00" },
    SAT: { start: "10:00", end: "14:00" }
  };

  // Get doctor information
  const fetchDocInfo = () => {
    if (docId && doctors) {
      const foundDoctor = doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoctor || null);
    }
  };

  // Function to convert time in HH:MM to a Date object
  const timeToDate = (date, time) => {
    const [hours, minutes] = time.split(':');
    const newDate = new Date(date);
    newDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    return newDate;
  };

  // Generate time slots according to the day's schedule
  const getAvailableSlots = async () => {
    let today = new Date();
    let availableSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let dayOfWeek = daysofWeek[currentDate.getDay()];
      let dateKey = currentDate.toLocaleDateString();
      availableSlots[dateKey] = [];

      // Get the schedule for the current day of the week
      const schedule = weeklySchedule[dayOfWeek];
      if (!schedule) continue;

      // Set start and end time based on the schedule
      let startTime = timeToDate(currentDate, schedule.start);
      let endTime = timeToDate(currentDate, schedule.end);

      // Populate the time slots for the day
      let timeSlots = [];
      while (startTime < endTime) {
        let formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(startTime),
          time: formattedTime
        });
        startTime.setMinutes(startTime.getMinutes() + 30);
      }
      availableSlots[dateKey].push(...timeSlots);
    }

    setDocSlots(availableSlots);
    setSelectedDate(Object.keys(availableSlots)[0]); // Default to first date
  };

  // Function to handle booking appointment
  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment booked for ${selectedDate} at ${selectedTime}`);
      // Add logic for actual booking, like calling an API or navigating to a confirmation page.
    } else {
      alert('Please select a valid date and time.');
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return docInfo && (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image} alt="Doctor"
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">About
             <img src={assets.info_icon} alt="Info" /></p>
          </div>
          <p className="text-sm text-gray-500 max-w-[700px] mt-1">
            {docInfo.about}
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Available Slots and Appointment Button below Appointment Fee */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <h3 className="text-lg font-medium text-gray-900">Available Slots</h3>
        <div className="flex gap-2 mt-2">
          {Object.keys(docSlots).map((date, index) => (
            <button
              key={index}
              className={`cursor-pointer py-2 px-4 rounded-full ${selectedDate === date ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}
              onClick={() => setSelectedDate(date)}
            >
              {new Date(date).toLocaleDateString([], { weekday: 'short', day: 'numeric' })}
            </button>
          ))}
        </div>
        
        {/* Time Slots - Display in a single row */}
        <div className="mt-4 flex overflow-x-auto space-x-4 py-2">
          {selectedDate && docSlots[selectedDate] ? (
            docSlots[selectedDate].map((slot, index) => (
              <button
                key={index}
                className={`cursor-pointer py-2 px-4 border rounded-full ${selectedTime === slot.time ? 'bg-blue-200' : 'bg-white'}`}
                onClick={() => setSelectedTime(slot.time)}
              >
                {slot.time}
              </button>
            ))
          ) : (
            <p>No available slots</p>
          )}
        </div>

        {/* Display selected time */}
        {selectedTime && <p className="mt-4">Selected Time: {selectedTime}</p>}

        {/* Appointment Button */}
        <button
          className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          onClick={handleBookAppointment}
        >
          Book An Appointment
        </button>
      </div>
      {/*  lisitng doctors */}
    <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>
  );
};

export default Appointment;
