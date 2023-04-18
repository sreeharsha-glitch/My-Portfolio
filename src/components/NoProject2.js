import './NoProject2Styles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import React1N from '../assets/React1N.jpg'
import React2N from '../assets/React2N.jpg'

const NoProject2 = () => {
  return (
    <div className='desc'>
            <div className='left'>
                <h1>Movie Recommendation System</h1>
                <p>
Developed a personalized movie recommendation system that leverages content and collaborative
filtering techniques
                </p>
                <Link to="https://github.com/AmikaMehta123/CMPE_255_Project_Team1" target="_blank">
                    <button className='buttonNP1'>
                        Github
                    </button>
                </Link> <br/>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React2N} className="img" alt='true' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React1N} className="img" alt='true' />
                    </div>
                </div>
            </div>

        </div>
  )
}

export default NoProject2