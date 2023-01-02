import React from "react";
import { Link } from "react-router-dom";

// import HomeIcon from "@material-ui/icons/Home";
// import PersonIcon from "@material-ui/icons/Person";
// import MapIcon from "@material-ui/icons/Map";
// import BubbleChartIcon from "@material-ui/icons/BubbleChart";
// import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
// import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
// import { Icon } from "@material-ui/core";

// import icons from icons
import Icons from "../img/Icons";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Primary__navbar">
      <ul>
        <li className="Primary__navbar-link">
          <Link to="/">
            {/* <HomeIcon alt="Home" /> */}
            <img className="Nav__icon" src={Icons.iconHome} alt="Home icon" />
          </Link>

          <Link to="/about">
            {/* <PersonIcon alt="About" />
             */}
            <img className="Nav__icon" src={Icons.iconPerson} alt="Map icon" />
          </Link>

          <Link to="/mapData">
            {/* <MapIcon alt="Map" />
             */}
            <img className="Nav__icon" src={Icons.iconMap} alt="Person icon" />
          </Link>

          <Link to="/Posters">
            {/* <BubbleChartIcon alt="Digital Posters" /> */}
            <img className="Nav__icon" src={Icons.iconCity} alt="Poster icon" />
          </Link>

          <Link to="/Gallery">
            {/* <CollectionsBookmark alt="Collections" />
             */}
            <img
              className="Nav__icon"
              src={Icons.iconGallery}
              alt="Gallery icon"
            />
          </Link>

          <Link to="/contact">
            <img
              className="Nav__icon"
              src={Icons.iconEmail}
              alt="Gallery icon"
            />
            {/* <AlternateEmailIcon /> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
