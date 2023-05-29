import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

function Header() {
    
    return (
        <div className="Header">
            <div className="logoContainer">
                <div className="logoTitle"> THE GRAPHIX PROJECT </div>
            </div>
            <div className="linkContainer">
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                > Home </NavLink>

                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                > About Us</NavLink>
                
                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                > News & Updates</NavLink>

                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                > Get Involved</NavLink>    

                <NavLink 
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"
                    }
                > Share Your Story </NavLink> 
            </div>
        </div>
    );
}

export default Header;