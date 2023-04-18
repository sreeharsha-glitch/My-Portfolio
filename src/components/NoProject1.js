import './NoProject1Styles.css'
import React from 'react'
import React1P from '../assets/React1P.jpg'
import React2P from '../assets/React2P.jpg'
import { Link } from 'react-router-dom'


const NoProject1 = () => {
    return (
        <div className='sdesc'>
            <div className='left'>
                <h1>Scholarship Application</h1>
                <p>Developed an application portal which allows students to apply for scholarships and fund scholarship providers to fund right students</p>
                <Link to="https://github.com/sreeharsha-glitch/ScollegeApp" target="_blank">
                    <button className='buttonNP1'>
                        Github
                    </button>
                </Link> <br/>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React2P} className="img" alt='true' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React1P} className="img" alt='true' />
                    </div>
                </div>
            </div>

        </div>
  )
}

export default NoProject1