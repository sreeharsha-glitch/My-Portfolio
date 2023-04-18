import './FooterStyles.css'
import { Link } from 'react-router-dom'
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>
                                754 The Alameda, San Jose, CA
                            </p>
                            <p>
                                United States
                            </p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            669-212-1983
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            saisreeharsha.chimbili@sjsu.edu
                        </h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>
                        About me
                    </h4>
                    <p>
                        Pursuing a Master's degree in Computer Software Engineering at San Jose State University.
                    </p>
                    <div className='social'>
                        <Link to="https://www.linkedin.com/in/saisreeharsha-c/" target="_blank">
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </Link>
                        <Link to="https://github.com/sreeharsha-glitch" target="_blank">
                            <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </Link>
                        <Link to="https://www.facebook.com/sreeharsha990/" target="_blank">
                            <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer