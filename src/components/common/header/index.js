import React from "react";
import { useState } from "react";
import "./header.css";

const Header = (props) => {
  const {user, handleLogout} = props;
  return (
    <div className="header max-width">
      <img className="header-pic" src="headerlogo.svg" alt="Kitchef logo" />
      <h1 className="header-logo">kitchef </h1>
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Chennai</div>
            </div>
            {/* <i className="fi fi-rr-caret-down absolute-center"></i> */}
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for your favourite dishes and home-cooks"
            />
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="login.png"
            className="header-profile-image"
            alt="sign-in logo"
          />
          <span className="header-username">{user.bc.email}</span>
          <select>
          <option onClick={handleLogout} value="LOGOUT">LOGOUT </option>
          <i onClick={handleLogout} className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
          </select>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
