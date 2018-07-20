import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./NavVis.css";
//

// const Navigation = (props) => {
function NavVis(props) {
    const { location } = props;
    const links = [
        {
            page: 'Protein Centric',
            to: '/visualise'
        },
        {
            page: 'Chromosome Centric',
            to: '/ideogram'
        }
        // {
        //     page: 'Sequence Viewer',
        //     to: '/sequence'
        // }
    ];


    return (

      <div className="nav2">
          <ul className="menu  Tabs tab">
            <li><a>
              {links.map(({ page, to }) => (
               window.location.href.includes(to)
               ? <a href={to} className="active">{page}</a>
                : <NavLink to={to}>{page}</NavLink>))}
               </a>
              </li>
            </ul>

          </div>

      // <div className="nav2">
      //     <ul className="menu">
      //       <li><a>
      //         <NavLink to="/visualise" activeClassName="active">Protein Centric</NavLink>
      //           <NavLink to="/ideogram" activeClassName="active">Chromosome Centric</NavLink>
      //            <NavLink to="/sequence" activeClassName="active">Sequence Viewer</NavLink>
      //          </a>
      //         </li>
      //       </ul>
      //
      //     </div>

      // <div className="nav2">
      //     <ul className="menu">
      //       <li><a>
      //         {links.map(({ page, to }) => (
      //          window.location.href.includes(to)
      //          ? <NavLink to={to} activeClassName="active">{page}</NavLink>
      //           : <a href={to}>{page}</a>))}
      //          </a>
      //         </li>
      //       </ul>
      //
      //     </div>



      // <div className="nav2">
      //     <ul className="menu">
      //       <li><a>
      //           {links.map(({ page, to }) => (
      //             window.location.href.includes(to)
      //             ? <a href={to}>{page}</a>
      //             : <NavLink to={to} activeClassName="active">{page}</NavLink>))}
      //           </a>
      //         </li>
      //       </ul>
      //
      //     </div>


      // <div className="nav2">
      //     <ul className="menu">
      //       <li><a>
      //         <NavLink to="/visualise" activeClassName="active">Protein Centric</NavLink>
      //           <NavLink to="/ideogram" activeClassName="active">Chromosome Centric</NavLink>
      //            <NavLink to="/sequence" activeClassName="active">Sequence Viewer</NavLink>
      //          </a>
      //         </li>
      //       </ul>
      //
      //     </div>


    )};


export default withRouter(NavVis);
