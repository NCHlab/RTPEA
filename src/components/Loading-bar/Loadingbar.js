import React, { Component } from 'react'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

class Loadingbar extends Component {
  constructor(props){
   super(props)
   this.state = {
    show: false
  };
  }


  onShow = ()=> {
    this.setState({ show: true })
  }

  onHide = ()=> {
    this.setState({ show: false })
  }

  render(){
    return (
      <div>
        <Loading
          show={this.state.show}
          color="red"
        />

        <button
          type="button"
          onClick={this.onShow}>
          show
        </button>

        <button
          type="button"
          onClick={this.onHide}>
          hide
        </button>
      </div>
    )
  }
}

export default Loadingbar;
