import * as React from "react";

import { LandingPageCard } from "./LandingPageCard";

import "./Home.css";

export const Home = () => {
  return (
    <div className="cardP">
      <LandingPageCard
        ProjectName=<h1>Xr-H</h1>
        Developer="© Jude Ricketts"
        SubTitle="Futuring the city's past"
        City="Greater Brighton"
        ProjectYear="2023"
        // Socials="@xx"
      />
    </div>
  );
};
