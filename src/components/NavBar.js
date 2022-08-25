/* eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <ul class="nav nav-pills">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">
          Movies
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/users">
          Users
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
