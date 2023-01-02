import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, GeolocateControl, Popup } from "react-map-gl";
import { NavigationControl } from "react-map-gl";

// import GoringHall_01 from "../img/GoringHall_01.png";
// import markerOrange from "../img/markerOrange.png";
import "./MapData.css";

// directions
// import MapboxDirections = require("@mapbox/mapbox-gl-directions");
// import MapboxDirections from "@mapbox/mapbox-gl-directions";
// **map example https://codesandbox.io/s/mapbox-react-popups-forked-sgtfod?file=/src/App.js
// Map with pop up https://codesandbox.io/s/relaxed-scott-efxccz

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianVkaXRocmlja2V0dHMiLCJhIjoiY2w1djA4Y2FuMDR6OTNibnAzbm1oeWN4dCJ9.bwVGnCWwW0QgGJp1KAoN2Q";

export const MapData = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  console.log("showPopup " + showPopup);

  return (
    <main className="cardQ">
      <header className="main__mapData-header">
        {/* <h2>Greater Brighton</h2> */}
      </header>
      <Map
        initialViewState={{
          longitude: -0.16038,
          latitude: 50.898625,
          zoom: 8.5,
          pitch: 45,
          bearing: -10, // bearing in degrees
        }}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      >
        {/* {showPopup && ( */}
        <Popup
          latitude={50.816513}
          longitude={-0.1369096}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
        {/* )} */}

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {/* ------------------- Landmarks markers ---------------------*/}

        <Marker
          latitude={50.816513}
          longitude={-0.1369096}
          anchor="bottom"
          onClick={() => setShowPopup(true)}
        />

        {/* --------------------------------------------------------------------------------------- */}
        <NavigationControl />
      </Map>
    </main>
  );
};
