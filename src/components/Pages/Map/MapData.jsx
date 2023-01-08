//original  page - working on .map()
import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, GeolocateControl, NavigationControl } from "react-map-gl";
// import GoringHall_01 from "../../img/GoringHall_01.png";
import "./MapData.css";
import { locationData } from "./locationData";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianVkaXRocmlja2V0dHMiLCJhIjoiY2w1djA4Y2FuMDR6OTNibnAzbm1oeWN4dCJ9.bwVGnCWwW0QgGJp1KAoN2Q";

export const MapData = () => {
  const data = locationData;

  return (
    // <main className="cardQ">
    <main className="main__body-mapData">
      <header className="main__mapData-header">
        <h2>Greater Brighton</h2>
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
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

        {/* .map()
    id: 1,
    FirstName_LastName_UK: "Michael Nihell Bovell",
    people_enslaved: 158,
    compensation: 838,    £
    latitude: 50.813492,
    longitude: -0.372458, */}

        {data.map((pin) => {
          return (
            <Marker
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setShowPopup(true);
              }}
              key={pin.id}
              latitude={pin.latitude}
              longitude={pin.longitude}
              anchor="bottom"
            />
          );
        })}
        <NavigationControl />
      </Map>
    </main>
  );
};
