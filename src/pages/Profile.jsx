
// import { useState } from "react";
// import { assets } from "../assets/assets";

// const Profile = () => {
//   const [userData] = useState({
//     name: "Max",
//     image: assets.profile_pic ,
//     email: "ric2@gmail.com", // Correct email formatting
//     phone: "89999999999", // Use string for large numbers
//     address: {
//       line1: "62 sector Noida",
//       line2: "Gaur City",
//     },
//     gender: "Female", // Correct gender if intended
//     dob: "2014-11-22", // Use string or Date object for dob
//   });
// const [isEdit,setEdit]=useState(false) 
//   return (
//     <div>
//       <img src={userData.image} alt={userData.name} /> 
//       {
//       isEdit
//       ? <input type="text" value ={userData.name} onChange={e=> setUserData(prev => ({...prev,name:e.target}))}/>
//       : <p> {userData.name}</p>
//       }
//       <hr/>
//       <div>
//         <p>CONTACT INFORMATION</p>
//         <div>
//           <p>Email id:</p>
//           <p>{userData.email}</p>
//           <p>Phone:</p>
//           {
//       isEdit
//       ? 
//       <input type="text" value ={userData.phone} onChange={e=> setUserData(prev => ({...prev,phone:e.target}))}/>
//       : 
//       <p> {userData.phone}</p>
//       }
//       <p>Address:</p> 
//       {
//         isEdit
//         ? 
//         <p>
//           <input   onChange={(e)=> setUserData(prev => ({...prev,address:{...prev.address,line1:e.target.value}}))}  value={userData.address.line1}type="text"/>
//           <br/>
//           <input    onChange={(e)=> setUserData(prev => ({...prev,address:{...prev.address,line2:e.target.value}}))}  value={userData.address.line2}type="text"/>
//         </p>
//         :
//         <p>
//           {userData.address.line1}
//           <br/>
//           {userData.address.line2}
//         </p>
//       }
//         </div>
//       </div>
//       <div>
//         <p>Basic Information</p>

//         <div>
//           <p>Gender:</p>
//           {
//       isEdit
//       ? <select onChange={(e)=> setUserData(prev => ({...prev,gender: e.target.value}))} value={userData.gender}>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         </select>
//          : <p> {userData.gender}</p>

//       }
//       <p>Birthday</p>
//       {
//         isEdit
//         ? <input type="date"onChange={(e)=> setUserData(prev => ({...prev,dob: e.target.value}))} value={userData.dob}/>
//         : <p>{userData.dob}</p>
//       }

//         </div>
//       </div>
//       <div>
//         {
//           isEdit
//           ? <button onClick={()=> setIsEdit(false)}>Save Information</button>
//           : <button onClick={()=> setIsEdit(true)}>Edit</button>
//         }
//       </div>
//      </div>
//   );
// };

// export default Profile;
import { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Max",
    image: assets.profile_pic,
    email: "max123@gmail.com", // Correct email formatting
    phone: "899796789", // Use string for large numbers
    address: {
      line1: "62 sector Noida",
      line2: "Gaur City",
    },
    gender: "Female", // Correct gender if intended
    dob: "2014-11-22", // Use string or Date object for dob
  });

  const [isEdit, setEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img  className="w-36 rounded"src={userData.image} alt={userData.name} />
      {isEdit ? (
        <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text" 
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr  className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {
          isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday</p>
          {isEdit ? (
            <input className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={() => setEdit(false)}>Save Information</button>
        ) : (
          <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={() => setEdit(true)}>Edit</button>
        )}
      </div>
    </div> 
  );
};

export default Profile;
