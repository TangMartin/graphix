import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navigation-bar/index.js';
import './get-involved.css';


function Involve() {
  
    return (
      <div className="involvePage">
        <div className="involveHeader">
            <Header />
        </div>
        <div className="involveContent">
            <div> Get Involved </div>
        </div>
      </div>
    );
  }
  
  export default Involve;