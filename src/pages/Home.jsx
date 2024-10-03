//import React from 'react'
import Banner from '../components/Banner'
//import Footer from '../components/Footer'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import RelatedDoctors from '../components/RelatedDoctors'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopDoctors/>
        <Banner/>
       {/* <Footer/>         */}
        <RelatedDoctors/>

    </div>
  )
}

export default Home