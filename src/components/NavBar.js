/* eslint-disable*/
import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link className="nav-link" to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies" activeClassName="active">
          Movies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/users" activeClassName="active">
          Users
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
