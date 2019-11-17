import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./NavDownload.css";
//

// const Navigation = (props) => {
function NavDownload(props) {
    const { location } = props;
    const links = [
        {
            page: 'Download',
            to: '/download'
        },
        {
            page: 'API',
            to: '/api'
        },
    ];


    return (
<div className="background-body-download">
      <div className="nav2">
          <ul className="menu ">
            <li>
              {links.map(({ page, to }) => (
               window.location.href.includes(to)
               ? <a key={to} href={to} className="active">{page}</a>
                : <NavLink key={to} to={to}>{page}</NavLink>))}
               
              </li>
            </ul>

          </div>
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


export default withRouter(NavDownload);
