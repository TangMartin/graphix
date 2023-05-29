import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navbar/index.js';
import Footer from '../../components/footer/index.js';
import './news-updates.css';


function Update() {
  
    return (
      <div className="updatePage">
        <div className="updateHeader">
            <Header />
        </div>
        <div className="updateContent">
            <div> News & Update </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
      </div>
    );
  }
  
  export default Update;