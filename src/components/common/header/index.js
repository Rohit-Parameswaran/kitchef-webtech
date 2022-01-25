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
            <form>
            <input type="text"
              className="search-input"
              placeholder="Search for your favourite dishes and home-cooks"
            />
            <input type="submit" className="search-button" value="Search"/>
            </form>
          </div>
        </div>

        <div className="profile-wrapper">
          <img
            src="user.jpg"
            className="header-profile-image"
            alt="sign-in logo"
          />
          <span className="header-username">{user.bc.email}</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
