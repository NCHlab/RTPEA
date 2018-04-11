import React from 'react';
import Humanimg from './Human.png';
import Humanimg2 from './Human_BW.png';
import Brain from './Brain.png';
import './Human.css';


const Human = () => {
  return (
  <div className="ma4 mt0">
      <div class="human-img">
        <div class="image_hover_bg"><img src={Humanimg2} className="pb6 imghov" alt="logo" height="650px" width="450px"/></div>
      </div>
      <img src={Humanimg} className="pb6 imghov" alt="logo" height="650px" width="450px"/>
        <img id= "Brain" src={Brain} className="pb6 imghov" alt="logo"/>

    </div>



  );
}

export default Human;

{/* <div style="width: 200px; height: 1000px; position: relative;">
   <img id="image1" style="position: relative;" src="..." alt="..." />
   <img id="image2" style="position: absolute; top: <y>px; left: <x>px;" src="..." alt="..." />
</div> */}
//
// Where <y> is (1000 - height of image2) / 2
// And <x> is (200 - width of image2) / 2
//
// As long as the surrounding div stays 1000 * 200 this should work
