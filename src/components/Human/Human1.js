import React, { Component } from 'react';
import Humanimg from './Human1.png';
import Svg1 from './human_non_colourised.svg';
import Svg2 from './human_colourised.svg';
import Svg3 from './human_colourised_lung_grouped.svg';

import Humanimg2 from './Human_W.png';
import Human_lung from './Human_lung.png';
import Brain from './Brain.png';
import Plot1 from './plot1.png';
import Plot2 from './plot2.png';
import './Human.css';
import imagemap from './imagemap';
import $ from 'jquery';
import ImageMapper from 'react-image-mapper';
import SVG from 'react-inlinesvg';
import Loader from 'react-loader';


  let AREAS_MAP = {
    name: "map1",
    areas: [
      { shape: "rect", coords: [80,6,123,57], href: "https://www.google.co.uk" /* Brain */ },
      { shape: "circle", coords: [104,178,48] /* Lung */ },
      { shape: "poly", coords: [57,242,67,231,78,228,91,231,106,235,123,234,134,238,133,244,124,252,117,257,104,259,97,262,87,266,83,272,76,271,68,269,62,272,58,277,55,256] /* Liver */ },
      { shape: "poly", coords: [112,259,120,258,126,259,123,265,115,268,115,275,108,276,97,276,91,270,95,263] /* Pancreas */ },
      { shape: "poly", coords: [59,279,58,299,58,319,68,328,76,324,79,331,92,330,94,336,99,342,105,343,107,334,108,325,116,326,130,325,138,318,142,304,141,293,141,274,143,264,135,259,124,269,117,275,106,279,91,277,76,273,67,271] /* Intestine */ },
      { shape: "poly", coords: [87,340,86,348,93,349,113,351,117,344,113,338,102,345,93,338] /* Testes */ },
      { shape: "circle", coords: [363,166,17] /* Heart */ },
      { shape: "rect", coords: [311,184,398,202] /* Breast */ },
      { shape: "poly", coords: [329,252,321,266,322,279,327,284,333,284,339,282,340,292,359,284,377,287,383,285,392,282,394,269,391,259,383,252,337,251] /* Kidney */ },
      { shape: "poly", coords: [353,350,364,347,368,326,373,307,379,308,383,315,400,308,396,292,376,295,360,291,341,294,323,291,316,297,316,307,324,315,331,315,336,308,343,312,350,337] /* Uterus */ },
    ]
    };



class Human extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: "false",
      highlight: false,
      index: "",
      x: 0,
      y: 0
    };


  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount = () => {


  }



  MouseEnter = (area, index, event) => {
    this.setState({loading: "true",
    index: index});

    // console.log(index);

  }

  MouseLeave = () => {
    this.setState({loading: "false"});
  }

  _onMouseMove = (e) => {
    this.setState({ x: e.screenX, y: e.screenY });
  }



  ImageArray = (index) => {
    if (index === 0){
      return <img src={Plot1} className="pb6 " alt="logo" height="450px" width="450px"/>;
    } else if (index === 1){
      return(
      <div className="moveleft">
        <img src={Plot1} className="pb6 " alt="logo" height="650px" width="450px"/>;
      </div>)
    }
  }


  showimg = () => {
    // if (this.state.x > 600 && this.state.x < 650 && this.state.y > 140 && this.state.y < 180 ){
    //   return <img src={Plot1} className="pb6 " alt="logo" height="450px" width="450px"/>;
    // }
  }


  getid = () => {
    var coordsDiv = document.getElementById('lung');
    console.log(coordsDiv)
    // console.log("hi")
  }

  detectSvg = (svgType) => {
    if (svgType === "brain"){
      console.log("Brain has been identified")
    } else if (svgType === "lung"){
      console.log("lung has been identified")
  }
}

    onClickHandler = (any2) => {
      console.log("I'm clicked");
      console.log(any2);
    }

    svgWrapper = ({ dangerouslySetInnerHTML, className }) => {
    return (
      <span
        onClick={() =>this.onClickHandler(className)}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={className}
      />
    );
  }

render (){

  var brainSvg = document.getElementsByClassName("brain");
  // var brainSvg = document.getElementById("brain")
  //
  // for (var i = 0; i < brainSvg.length; i++) {
  //       brainSvg[i].addEventListener('click', function(){
  //           alert('I was clicked!');
  //       });
  //   }
  console.log(brainSvg)

  // brainSvg.addEventListener("mouseover", this.detectSvg("brain"))

  const { x, y } = this.state;
    return (
  // <div onMouseMove={this._onMouseMove.bind(this)}>

    <div className="ma4 mt0">
      {/* {console.log(brain_svg)} */}

      <div className="container c1">
        <div className="human-img">

          <div className="go-left">
            <div id="human-svg-1" >
              {/* onMouseEnter={() => console.log("clickkkkk")} */}
            {/* <SVG
              src={Svg3}
            onMouseEnter={() => console.log("clickkkkk")}/> */}

            <SVG src={Svg3} uniquifyIDs={false} className="foo bar" wrapper={this.svgWrapper} />
              </div>
                       {/* onMouseLeave={console.log("mouse left")} */}
          </div>
          {/* <div className="human-invisible">
            <ImageMapper src={Humanimg}  map={AREAS_MAP} fillColor="rgba(204, 58, 38, 0.5)" className="pb6" alt="" height={"500"} width={"300"} onMouseEnter={this.MouseEnter} />
          </div> */}
        </div>
        {this.getid()}

        {this.showimg()}


          <h1>Mouse coordinates: { x } { y }</h1>


        <div className="inline-img">
          {this.ImageArray(this.state.index)}
        </div>
      </div>

        <h1>
          {this.state.loading}
        <br/>
          {this.state.index}
        </h1>
        <br/>
        <svg className="umbrella" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
 <title id="title">Umbrella Icon</title>
       <path d="M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z"/>
     </svg>

     <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
    <rect id="svg_1" height="65" width="78" y="79.950012" x="78.5" stroke-width="1.5" stroke="#000" fill="#022"/>
  <path id="svg_2" d="m-0.00197,49.94376l0,0c27.582901,0 49.943269,-22.360359 49.943269,-49.94327l199.76709,0l0,0c0,27.582899 22.360367,49.94327 49.943253,49.94327l0,199.767117l0,0c-27.582886,0 -49.943253,22.360321 -49.943253,49.943237l-199.76709,0c0,-27.582916 -22.360369,-49.943237 -49.943269,-49.943237z" opacity="0.5" stroke-width="1.5" stroke="#000" fill="#000"/>
  <rect id="svg_16" onMouseEnter={this.detectSvg("brain")} height="181" width="80" y="134.950012" x="345.5" stroke-width="1.5" stroke="#000" fill="#000"/>
  <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_17" y2="22.950009" x2="499.499998" y1="55.950009" x1="342.500003" stroke-width="1.5" stroke="#000" fill="none"/>
 </g>
</svg>
        {/* <img src={Svg1} alt="svg"/> */}

        {/* <object className="lung-svg" type="image/svg+xml" data={Svg1}>
          Your browser does not support SVG
        </object> */}




        {/* preloader={<Loader />} onLoad={(src) => {
               myOnLoadHandler(src);
           }} */}
      </div>
      // </div>

  );
}
}

export default Human;

        //   {/* <div>
        //     {this.state.index ? (
        //         <img src={brain2} className="pb6 imghov" alt="logo" height="450px" width="450px"/>
        //     ):0}
        //   </div> */}
        //
        //   {/* <ImageMapper src={Humanimg} map={AREAS_MAP2} alt="" height={"650"} width={"450"}/> */}
        // {/* <img src={Humanimg} className="pb6 imghov" alt="logo" height="650px" width="450px"/> */}
        //   {/* <img id= "Brain" src={Brain} className="pb6 imghov" alt="logo"/> */}

              // {/*<div className="image-relative-top">
              //      <img id="image1" src={Humanimg} width={"450"} height={"650"} alt="HumanImg" />
              //      <img id="image2" style={{position: "absolute", top: "100px", left: "100px"}} src={Plot2} alt="plot2" />
              // </div>*/}
              // {/* <img src={Humanimg} className="pb6 imghov" alt="logo" height="650px" width="450px"/> */}
              //     {/* <img src={brain2} className="pb6 imghov" alt="logo" height="450px" width="450px"/> */}
              //     {/* fillColor="rgba(204, 58, 38, 0.5)"
              //
              //    onMouseLeave={this.checkclick2}*/}


    // onMouseEnter(map1,0,this.handlestatechange)
                  // currentHighlight = () => {
                  //   const newHighlight = this.state.highlight.map((highlight)=>{
                  //     const tempUser = highlight;
                  //     tempUser.age -=10;
                  //     return tempUser;
                  //   })
                  //   this.setState({
                  //     newHighlight
                  //   })
                  // }
