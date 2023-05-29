import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navbar/index.js';
import Footer from '../../components/footer/index.js';
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
        <div className="footer">
            <Footer />
        </div>
      </div>
    );
  }
  
  export default Home;