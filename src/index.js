import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// class App extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>hello!</h1>
//       </div>
//     );
//   }
// }
