import React from 'react';
import appColor from '../../constants.js';

import Header from '../../components/navbar/index.js';
import Footer from '../../components/footer/index.js';
import Member from '../../components/member/index.js';

import HistoryBook from '../../assets/about-us/graphicHistoryBook.png';
import InterviewMap from '../../assets/about-us/mapInterview.png';
import ResearchBook from '../../assets/about-us/researchBook.png';
import Cartoon from '../../assets/about-us/cartoonImage.png';
import './about-us.css';


function About() {
  
    return (
      <div className="aboutPage">
        <div className="aboutHeader">
            <Header />
        </div>
        
        <div className="aboutSec1">
          <div className="aboutSec1Background">
            <div className='aboutSec1Text'>
              <div style={{
                fontSize: "4vw",
                fontWeight: "900",
              }}>
                Graphic Human Rights
              </div>
              <div style={{
                fontSize: "4vw",
                fontWeight: "900",
                paddingTop: "1%",
              }}>
                Education Project
              </div>
              <div style={{
                fontSize: "1.2vw",
                paddingTop: "1%",
                marginLeft: "30%",
                paddingTop: "5%",
              }}>
                Tracing the complex intellectual history of human rights and chronicling 3000 years of struggles, progression and evolution
              </div>
            </div>
            <div className="aboutSec1Image">
              <img src={HistoryBook} alt="HistoryBook" style={{
                maxWidth: "70vw",
                maxHeight: "70vh",
              }}/>
            </div>
          </div>
        </div>
        <div className="aboutSec2" style={{
          backgroundImage: `url(${InterviewMap})`,
          marginLeft: "10%",
        }}>
          <div className='aboutSec2Text'>
            <div style={{
              fontSize: "3vw",
              fontWeight: "900",
              textAlign: "left",
            }}>
              Advance
              global implementation 
              of human rights 
              education programmes
            </div>
            <div style={{
                fontSize: "1.2vw",
                paddingTop: "5%",
                textAlign: "left",
            }}>
              Support the World Programme for Human Rights Education (WPHRE) 
              declared by the UN General Assembly (GA Resolution 48/141)
            </div>
            <div className="aboutSec2List">
              <div style={{ flex: "1", textAlign: "left"}}>
                <ul>
                  <li>Inequality & immigration</li>
                  <li>Minorities demonized</li>
                  <li>Distrust of democratic institutions</li>
                </ul>
              </div>
              <div style={{ flex: "1", textAlign: "left"}}>
                <ul>
                  <li>Surge of authoritarian populists elected</li>
                  <li>Multilateralism eroded</li>
                  <li>Human rights principles attacked</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutSec3'>
          <div className='aboutSec3Background'>
            <div style={{
                fontSize: "3vw",
                fontWeight: "900",
              }}>
                Our Formative Research Program
            </div>
            <div className='aboutSec3Title'>
              Goals & Objectives
            </div>
              <div className='aboutSec3Container'>
                <div className='aboutSec3Goals'>
                  <div className='aboutSec3Box' style={{
                    backgroundColor: "#A4C85D",
                    marginTop: "10%",
                  }}>
                      Gather exploratory and <br></br> specific information about <br></br> needs and challenges
                  </div>
                  <div className='aboutSec3Box' style={{
                    backgroundColor: "#E78D4C",
                    marginTop: "10%",
                  }}>
                      Explore the best way <br></br> to engage with <br></br> target audiences
                  </div>
                </div>

                <div className='aboutSec3Text'>
                  <div>
                    Evidence-based, <br></br> results-oriented processes
                  </div>
                  <div>
                    Engagement with <br></br> entertainment-education <br></br> communication approach
                  </div>
                </div>
              </div>
            <div className='aboutSec3Title'>
              Research Foci
            </div>
            <div className='aboutSec3Container'>
              <div className='aboutSec3ResearchImage'>
                <img src={ResearchBook} alt="ResearchBook" style={{ 
                  maxWidth: "70vw",
                  maxHeight: "70vh",
                }}/>
              </div>
              <div className='aboutSec3Text'>
                <div>
                  Topics/subtopics that are of most interest/relevance <br></br>  to our target audiences
                </div>
                <div>
                  Most appropriate channels and <br></br>  platforms to reach target audiences
                </div>
                <div>
                  The most cost-effective ways to develop and implement <br></br>  project based on target audiences needs and interests
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutSec4'>
            <img src={Cartoon} alt="ResearchCartoon"/>
        </div>
        <div className="aboutSec4">
          <div className='aboutSec3Title'>
            Meet the Rest of the Crew
          </div>
          <div className='aboutSec4Container'>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
          </div>
          <div className='aboutSec4Container'>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
            <Member role="Role in the Team" name="Name of the Member" description="A few sentences about the team member"/>
          </div>
        </div>
        <div className="footer">
            <Footer backgroundcolor="#6859A0"/>
        </div>
      </div>
    );
  }
  
  export default About;