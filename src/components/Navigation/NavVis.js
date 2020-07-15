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
        },
        {
          page: 'All Loci',
          to: '/loci_ideogram'
      }
    ];


    return (

      <div className="nav2">
          <ul className="menu  Tabs tab">
            <li>
              {links.map(({ page, to }) => (
               window.location.href.includes(to)
               ? <a key={to} href={to} className="active">{page}</a>
                : <NavLink key={to} to={to}>{page}</NavLink>))}

              </li>
            </ul>

          </div>
    )};


export default withRouter(NavVis);
