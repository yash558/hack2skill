import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import TopChart from '../../components/TopChart/TopChart';
import Footer from '../../components/Footer/Footer';


const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Search/>
        <TopChart/>
        <Footer/>
    </div>
  )
}

export default Homepage;