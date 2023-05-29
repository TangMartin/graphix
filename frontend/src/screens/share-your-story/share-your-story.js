import React from 'react';
import appColor from '../../constants.js';
import Header from '../../components/navigation-bar/index.js';
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
      </div>
    );
  }
  
  export default Share;