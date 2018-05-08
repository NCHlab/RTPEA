// import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery'

const imagemap = () => {
  $(document).ready(function(e) {
      $('img[usemap]').rwdImageMaps();
  });
}


export default imagemap;
