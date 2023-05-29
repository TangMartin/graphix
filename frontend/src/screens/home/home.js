import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navigation-bar/index.js';
import './home.css';


function Home() {
  
    return (
      <div className="homePage">
        <div className="homeHeader">
            <Header />
        </div>
        <div className="homeContent">
            <div> Home </div>
        </div>
      </div>
    );
  }
  
  export default Home;