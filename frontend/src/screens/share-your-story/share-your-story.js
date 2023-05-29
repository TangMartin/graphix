import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navbar/index.js';
import Footer from '../../components/footer/index.js';
import './share-your-story.css';


function Share() {
  
    return (
      <div className="storyPage">
        <div className="storyHeader">
            <Header />
        </div>
        <div className="storyContent">
            <div> Share Your Story </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
      </div>
    );
  }
  
  export default Share;