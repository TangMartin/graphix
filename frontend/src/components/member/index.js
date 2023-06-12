import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import MemberPic from '../../assets/about-us/memberPicture.png';

function Member(props) {
    
    return (
        <div className="Member">
            <img src={MemberPic} alt="MemberPic" style={{
            }}/>
            
            <div className="MemberRole">
                {props.role}
            </div>
            <div className="MemberName">
                {props.name}
            </div>
            <div className="MemberDescription">
                {props.description}
            </div>
        </div>
    );
}

export default Member;