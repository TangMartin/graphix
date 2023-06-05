import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navbar/index.js';
import Footer from '../../components/footer/index.js';
import HistoryBook from '../../assets/about-us/graphicHistoryBook.png';
import './about-us.css';


function About() {
  
    return (
      <div className="aboutPage">
        <div className="aboutHeader">
            <Header />
        </div>
        <div className="aboutSec1">
          <div className="aboutIntro">
            <div className='aboutIntroText'>
              <div style={{
                fontSize: "4vw",
                fontWeight: "900",
              }}>
                Graphic
              </div>
              <div style={{
                fontSize: "4vw",
                fontWeight: "900",
                paddingTop: "1%",
              }}>
                Human Rights
              </div>
              <div style={{
                fontSize: "4vw",
                fontWeight: "900",
                paddingTop: "1%",
              }}>
                Education Project
              </div>
            </div>
            <div className="aboutIntroImage">
              <img src={HistoryBook} alt="HistoryBook" style={{
                maxWidth: "70vw",
                maxHeight: "70vh",
              }}/>
            </div>
          </div>
        </div>
        <div className="footer">
            <Footer backgroundcolor="#6859A0"/>
        </div>
      </div>
    );
  }
  
  export default About;