// import { useState, useContext, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Doctors = () => {
//   const { speciality } = useParams();
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter,setShowFilter]=useState(false)
//   const { doctors } = useContext(AppContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (doctors) {
//       if (speciality) {
//         // Normalize the speciality for comparison (trim spaces and convert to lowercase)
//         const normalizedSpeciality = speciality.trim().toLowerCase();
//         const filtered = doctors.filter(doc => 
//           doc.speciality.trim().toLowerCase() === normalizedSpeciality
//         );
//         setFilterDoc(filtered);
//       } else {
//         setFilterDoc(doctors);
//       }
//     }
//   }, [doctors, speciality]);

//   return (
//     <div>
//       <p className="text-gray-900">Browse Through The Doctors Specialist</p>
//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''} onClick={()=> setFilterDoc(prev => !prev)}`}>Filters</button>
//         <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
//           <p onClick={()=>speciality==='General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General physician</p> 
//           <p onClick={()=>speciality==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
//           <p onClick={()=>speciality==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
//           <p onClick={()=>speciality==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
//           <p onClick={()=>speciality==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
//           <p onClick={()=>speciality==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
//         </div>
//         <div className="w-full grid grid-cols-auto gap-4 gap-y-6"> 
//           {filterDoc.length > 0 ? (
//             filterDoc.map((item) => (
//               <div
//                 onClick={() => navigate(`/appointment/${item._id}`)}
//                 className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
//                 key={item._id} // Use a unique key such as item._id
//               >
//                 <img className="bg-blue-50" src={item.image} alt={item.name} />
//                 <div className="p-4">
//                   <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                     <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                     <p>Available</p>
//                   </div>
//                   <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                   <p className="text-gray-600 text-sm">{item.speciality}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No doctors available for this speciality.</p> // Handle empty state
//           )}
//         </div>
//       </div>
// //     </div>
//   );
// };

// export default Doctors;


import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);  // Toggle for showing filters
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors) {
      if (speciality) {
        const normalizedSpeciality = speciality.trim().toLowerCase();
        const filtered = doctors.filter(doc =>
          doc.speciality.trim().toLowerCase() === normalizedSpeciality
        );
        setFilterDoc(filtered);
      } else {
        setFilterDoc(doctors);
      }
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-900 ">Browse Through The Doctors Specialist</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className="py-1 px-3 border rounded text-sm transition-all sm:hidden bg-primary text-white" onClick={() => setShowFilter(prev => !prev)}>
          {showFilter ? "Hide Filters" : "Show Filters"} {/* Button to toggle filter visibility */}
        </button>

        {showFilter && (  // Conditionally render filters based on showFilter state
          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <p
              onClick={() =>
                speciality === "General physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General physician")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              General physician
            </p>
            <p
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Gynecologist
            </p>
            <p
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Dermatologist
            </p>
            <p
              onClick={() =>
                speciality === "Pediatricians"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatricians")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Pediatricians
            </p>
            <p
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Neurologist
            </p>
            <p
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Gastroenterologist
            </p>
          </div>
        )}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.length > 0 ? (
            filterDoc.map(item => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={item._id}
              >
                <img className="bg-blue-50" src={item.image} alt={item.name} />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors available for this speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
