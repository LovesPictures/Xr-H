import React from "react";

import { locationData } from "./locationData";

import "./MapData.css";

export const MapData = () => {
  return (
    <div>
      <main className="main__body-posters">
        <header className="main__mapData-header">locations</header>

        {locationData.map((locationData) => {
          return <div locationData={locationData} />;
        })}
      </main>
    </div>
  );
};
