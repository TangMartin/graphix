import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navbar/index.js';
import Footer from '../../components/footer/index.js';
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
        <div className="footer">
            <Footer />
        </div>
      </div>
    );
  }
  
  export default Involve;