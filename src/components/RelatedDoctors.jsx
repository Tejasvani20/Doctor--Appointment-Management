
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);
    const [relDoc, setRelDocs] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDocs(doctorsData);
        }
    }, [doctors, speciality, docId]);

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-semibold">Top Related Doctors</h1>
            {/* <p className="sm:w-1/3 text-center font-medium text-lg">Simply browse through our extensive list of trusted healthcare providers.</p> */}
            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }} 
                         className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" 
                         key={index}>
                        <img className="bg-blue-50" src={item.image} alt={item.name} />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>Available</p>
                            </div>
                            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                            <p className="text-gray-600 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }} 
                    className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 font-bold">
                More
            </button>
        </div>
    );
};

RelatedDoctors.propTypes = {
    speciality: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
 };

 export default RelatedDoctors;

// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";
// import PropTypes from 'prop-types';

// const RelatedDoctors = ({ speciality, docId }) => {
//     const { doctors } = useContext(AppContext);
//     const [relDoc, setRelDocs] = useState([]);
//     const navigate = useNavigate(); 

//     useEffect(() => {
//         // Check if doctors are loaded and speciality exists
//         if (doctors && doctors.length > 0 && speciality) {
//             // Filter doctors based on speciality and exclude the current doctor
//             const filteredDoctors = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            
//             // Log the filtered data to debug if it's being correctly filtered
//             console.log("Filtered Doctors: ", filteredDoctors);
            
//             // Set the related doctors in state
//             setRelDocs(filteredDoctors);
//         }
//     }, [doctors, speciality, docId]);

//     return (
//         <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
//             <h1 className="text-3xl font-medium">Top Related Doctors</h1>
//             <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted healthcare providers.</p>

//             {/* Show a message or skeleton if there are no related doctors */}
//             {relDoc.length === 0 ? (
//                 <p>No related doctors found.</p>
//             ) : (
//                 <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
//                     {doctors.slice(0, 5).map((item, index) => (
//                         <div 
//                             onClick={() => { navigate(`/appointment/${item._id}`); window.scrollTo(0, 0); }} 
//                             className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" 
//                             key={index}>
//                             <img className="bg-blue-50" src={item.image} alt={item.name} />
//                             <div className="p-4">
//                                 <div className="flex items-center gap-2 text-sm text-center text-green-500">
//                                     <p className="w-2 h-2 bg-green-500 rounded-full"></p>
//                                     <p>Available</p>
//                                 </div>
//                                 <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                                 <p className="text-gray-600 text-sm">{item.speciality}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             <button 
//                 onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }} 
//                 className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 font-bold">
//                 More
//             </button>
//         </div>
//     );
// };

// RelatedDoctors.propTypes = {
//     speciality: PropTypes.string.isRequired,
//     docId: PropTypes.string.isRequired,
// };

// export default RelatedDoctors;
