import React, { Component } from 'react';
import Human from '../Human/Human';
import CountTo from 'react-count-to';


// import Loadingbar from '../Loading-bar/Loadingbar';




// import '../../App.css';

const Home = ({onShow, onHide}) => {
  return (
  <div className="">
    <p className="App-intro">
        <h1 className="container">Welcome to Retroelement Protein Expression Atlas</h1>
    </p>
    <body2>

      <div className="container">
        test
        <Human />
      </div>

    </body2>
    <div className="line-seperator"> </div>
    <div className="background-body">

      <button
          type="button"
          onClick={onShow}>
          show
        </button>

      <div className="container">

      <h1>
        # of Orf1:
        <CountTo to={1608424} speed={3000} />
        <br />
        # of Orf2:
        <CountTo to={2934451} speed={3000} />
        {/* onComplete={onHide} */}
      </h1>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id convallis tellus. Suspendisse feugiat velit a quam viverra, ac bibendum sem laoreet. Vivamus vehicula felis a imperdiet luctus. Nulla aliquam erat tortor, at sodales est iaculis a. Donec ornare est erat, vel posuere libero vulputate id. Donec eget dui mollis, molestie nibh porttitor, porta enim. Ut iaculis volutpat risus at aliquam. Cras quis ante in ex placerat feugiat. Duis a magna sit amet mi malesuada tristique a sed lectus. Aliquam erat volutpat. Phasellus fermentum vel felis nec porta. Aliquam erat volutpat. Quisque efficitur ante eget convallis gravida. Cras vel posuere nunc, ac mollis elit. Nulla vel ullamcorper lacus.

      Aliquam purus diam, aliquam vitae tortor eu, imperdiet elementum massa. In dapibus, metus sit amet eleifend aliquet, quam ex lobortis magna, nec bibendum arcu risus sed erat. Maecenas posuere, mauris ut volutpat eleifend, quam sem tempor erat, nec imperdiet nisi ante id mi. Aliquam eu pharetra urna. Aliquam et nibh ac mi aliquet tempus. Suspendisse fermentum mattis nisi. Maecenas aliquam eget tellus et pretium. Nullam imperdiet ligula eu nisl pulvinar congue. Aenean euismod fringilla enim, eu tempor felis aliquam tincidunt.

      Aliquam in ornare quam. Nam lobortis, velit ac dignissim sodales, turpis nisl sollicitudin magna, eget dictum est dolor sed arcu. Fusce porta augue quis leo tempus, et tincidunt metus viverra. Etiam leo ipsum, lobortis sit amet ligula id, egestas varius ipsum. Ut rutrum eu urna sit amet luctus. Curabitur vulputate metus sit amet consectetur dignissim. Donec bibendum suscipit nunc ac interdum. Morbi id blandit tellus. Nullam porta porttitor tellus faucibus condimentum.

      Duis volutpat euismod metus vel rhoncus. Aenean risus ligula, dictum ac lectus eget, malesuada congue metus. Sed ut lectus risus. Phasellus dolor odio, condimentum et condimentum vel, placerat a libero. Morbi euismod semper lacus, a consequat turpis volutpat non. Nulla commodo nulla erat, tempus ornare est facilisis in. Phasellus sit amet congue leo. Suspendisse cursus orci at volutpat tempor. Pellentesque at vehicula dolor. Integer mollis velit at rhoncus gravida. Phasellus sit amet mi tellus.

      Suspendisse laoreet nibh et leo vestibulum facilisis. Aenean nisl massa, fermentum non lacus at, accumsan malesuada nibh. In sollicitudin laoreet dictum. Vestibulum id semper erat, vitae accumsan justo. Sed imperdiet cursus magna, sit amet faucibus urna cursus eu. Suspendisse tristique iaculis arcu, laoreet laoreet dui sagittis sed. Phasellus a commodo mauris, vitae rhoncus tortor.
    </div>
    </div>
    <div className="line-seperator"></div>
    <div className="background-body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id convallis tellus. Suspendisse feugiat velit a quam viverra, ac bibendum sem laoreet. Vivamus vehicula felis a imperdiet luctus. Nulla aliquam erat tortor, at sodales est iaculis a. Donec ornare est erat, vel posuere libero vulputate id. Donec eget dui mollis, molestie nibh porttitor, porta enim. Ut iaculis volutpat risus at aliquam. Cras quis ante in ex placerat feugiat. Duis a magna sit amet mi malesuada tristique a sed lectus. Aliquam erat volutpat.
    </div>
    <div className="line-seperator"></div>
    <div className="background-body3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id convallis tellus. Suspendisse feugiat velit a quam viverra, ac bibendum sem laoreet. Vivamus vehicula felis a imperdiet luctus. Nulla aliquam erat tortor, at sodales est iaculis a. Donec ornare est erat, vel posuere libero vulputate id. Donec eget dui mollis, molestie nibh porttitor, porta enim. Ut iaculis volutpat risus at aliquam. Cras quis ante in ex placerat feugiat. Duis a magna sit amet mi malesuada tristique a sed lectus. Aliquam erat volutpat.
    </div>

  </div>
);
}
export default Home;
