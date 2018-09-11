import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "./NavDownload.css";

function NavDownload(props) {
    // const { location } = props;
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
               ? <a key={page} href={to} className="active">{page}</a>
                : <NavLink key={page} to={to}>{page}</NavLink>))}
              </li>
            </ul>

          </div>
        </div>
    )};


export default withRouter(NavDownload);
