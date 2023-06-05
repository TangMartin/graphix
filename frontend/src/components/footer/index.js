import React from 'react';
import './index.css';
import { appColor } from '../../constants';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    return(
        <div className='Footer' style={{backgroundColor: props.backgroundcolor}}>
            <div className='footerContainer'>
                <div className='footerLeft'>
                    <NavLink 
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "link-active-footer" : "link-inactive-footer"
                            }
                        > Home </NavLink>

                        <NavLink 
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "link-active-footer" : "link-inactive-footer"
                            }
                        > About Us</NavLink>
                        
                        <NavLink 
                            to="/update"
                            className={({ isActive }) =>
                                isActive ? "link-active-footer" : "link-inactive-footer"
                            }
                        > News & Updates</NavLink>

                        <NavLink 
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "link-active-footer" : "link-inactive-footer"
                            }
                        > Get Involved</NavLink>    

                        <NavLink 
                            to="/share"
                            className={({ isActive }) =>
                                isActive ? "link-active-footer" : "link-inactive-footer"
                            }
                    > Share Your Story </NavLink> 
                </div>
                <div className='footerMiddle'>
                        <NavLink 
                            to="/share"
                            className={({ isActive }) =>
                                isActive ? "link-active-footer" : "link-inactive-footer"
                            }
                        > Privacy Policy </NavLink>

                        <NavLink 
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "link-active-footer" : "link-inactive-footer"
                            }
                        > Terms and Conditions </NavLink>
                </div>
                <div className='footerRight'>
                    <div style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "800",
                        paddingBottom: "2%",
                    }}>
                            Contact Us
                    </div>
                    <div style={{
                        color: "white",
                    }}>
                        Reach out to chat with us about the project.  We look forward to hearing from you and will get back to you as soon as possible.
                    </div>
                </div>
            </div>
            <div style={{
                color: "white",
                fontSize: "20px", 
                fontWeight: "800",              
            }}>
                © The Graphix Project 2022. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;