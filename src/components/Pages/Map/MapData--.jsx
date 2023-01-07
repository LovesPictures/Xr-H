import React from "react";

import { locationData } from "./locationData";

import "./MapData.css";

export const MapData = () => {
  return (
    <div>
      <div className="cardQ">
        <header className="main__mapData-header">locations</header>

        {locationData.map((locationData) => {
          /* prop = value */
          return <div project={locationData} />;
        })}
      </div>
    </div>
  );
};
