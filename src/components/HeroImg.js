import './HeroImgStyles.css'
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt='IntroImg' />
        </div>
        <div className='content'>
            <p>HI, I'M SREE HARSHA</p>
            <h1>FRONT-END DEV | UI DESIGNER</h1>
            <div>
                <Link to='/project' className='btn'> PROJECTS</Link>
                <Link to='/contact' className='btn btn-light'> CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;

//https://www.youtube.com/watch?v=0h2b4ftbZcU youtube link to create a portfolio