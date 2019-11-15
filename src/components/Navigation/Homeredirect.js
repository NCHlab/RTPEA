import React from "react";
import { Redirect } from 'react-router-dom'

// class Homeredirect extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }
const Homeredirect = props => (

       <div>
         <Redirect to='/home'/>
       </div>
    )
// }
export default Homeredirect;
