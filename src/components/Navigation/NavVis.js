import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "./NavVis.css";

function NavVis(props) {
    // const { location } = props;
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
          <ul className="menu Tabs tab">
            <li>
              {links.map(({ page, to }) => (
               window.location.href.includes(to)
               ? <a key={page} href={to} className="active">{page}</a>
                : <NavLink key={page} to={to}>{page}</NavLink>))}
              </li>
            </ul>
          </div>
    )};


export default withRouter(NavVis);
