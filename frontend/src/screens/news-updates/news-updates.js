import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navigation-bar/index.js';
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
      </div>
    );
  }
  
  export default Update;