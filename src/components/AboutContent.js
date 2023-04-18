import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import React1 from '../assets/React1.jpg'
import React2 from '../assets/React2.jpg'


const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Whom am I?</h1>
                <p>I'm a React Front-end Developer. I can create responsive secure websites. I create wireframes and prototyping.</p>
                <Link to="/contact">
                    <button className='btnkt'>
                        CONTACT
                    </button>
                </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React1} className="img" alt='true' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React2} className="img" alt='true' />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutContent