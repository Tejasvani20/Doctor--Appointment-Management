import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[15%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
















// //import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Doctor from './pages/Doctor'
// import Login from './pages/Login'
// import About from './pages/ABout'
// import Contact from './pages/Contact'
// import Profile from './pages/Profile'
// import MyAppointments from './pages/MyAppointments'
// import Appointment from './pages/Appointment'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div className='mx-4 sm:mx-[15%]'>
//      <Navbar/>
//       <Routes>
//          <Route path='/' element ={<Home />}/>
//          <Route path='/'doctor element ={<Doctor />}/>
//          <Route path='/ doctor/: speciality' element ={<Doctor />}/>
//          <Route path='/ login' element ={<Login />}/>
//          <Route path='/ about' element ={<About />}/>
//          <Route path='/ contact' element ={<Contact/>}/>
//          <Route path='/ profile' element ={<Profile />}/>
//          <Route path='/my-appointment' element ={<MyAppointments/>}/>
//          <Route path='/appointment/:docId' element ={<Appointment />}/>
//       </Routes>
//     <Footer/>
//     </div>
//   )
// }

// export default App



