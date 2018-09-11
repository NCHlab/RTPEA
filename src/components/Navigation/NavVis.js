import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "./NavVis.css";

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
    )};


export default withRouter(NavVis);
