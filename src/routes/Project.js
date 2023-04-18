import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import NoProject1 from '../components/NoProject1';
import NoProject2 from '../components/NoProject2';
import NoProject3 from '../components/NoProject3';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='PROJECTS' text='Some of my recent works'/>
      <NoProject1/>
      <NoProject2/>
      <NoProject3/>
      <Footer/>
    </div>
  )
}

export default Project