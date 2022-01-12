import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="nav-logo"
        src="https://cdn.vox-cdn.com/thumbor/lfpXTYMyJpDlMevYNh0PfJu3M6Q=/39x0:3111x2048/920x613/filters:focal(39x0:3111x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
        alt="netflix-logo"
      />
      <div>
        <p className="nav-profile">Profile</p>
      </div>
    </div>
  );
}

export default NavBar;
