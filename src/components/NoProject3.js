import './NoProject3Styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import React1G from '../assets/React1G.jpg'
import React2G from '../assets/React2G.jpg'

const NoProject3 = () => {
  return (
    <div className='desc3'>
            <div className='left'>
                <h1>Airport Management System</h1>
                <p>
Web-based flight management application with supporting backend
APIs and Implemented core functionalities
                </p>
                <Link to="https://github.com/gopinathsjsu/team-project-scorchers" target="_blank">
                    <button className='buttonNP1'>
                        Github
                    </button>
                </Link> <br/>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React2G} className="img" alt='true' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React1G} className="img" alt='true' />
                    </div>
                </div>
            </div>

        </div>
  )
}

export default NoProject3;