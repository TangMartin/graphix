import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navbar/index.js';
import Footer from '../../components/footer/index.js';
import './about-us.css';


function About() {
  
    return (
      <div className="aboutPage">
        <div className="aboutHeader">
            <Header />
        </div>
        <div className="aboutContent">
            <div> About Us </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
      </div>
    );
  }
  
  export default About;