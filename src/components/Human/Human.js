import React from 'react';
import Humanimg from './Human.png';
import Humanimg2 from './Human_BW.png';
import './Human.css';


const Human = () => {
  return (
  <div className="ma4 mt0">
      <div class="profile-image">
        <div class="image_hover_bg"><img src={Humanimg2} className="pb6 imghov" alt="logo" height="600px" width="450px"/></div>
      </div>
      <img src={Humanimg} className="pb6 imghov" alt="logo" height="600px" width="450px"/>
    </div>



  );
}

export default Human;
