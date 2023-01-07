//original  page - working on .map()
import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, GeolocateControl, NavigationControl } from "react-map-gl";
// import GoringHall_01 from "../../img/GoringHall_01.png";
import "./MapData.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianVkaXRocmlja2V0dHMiLCJhIjoiY2w1djA4Y2FuMDR6OTNibnAzbm1oeWN4dCJ9.bwVGnCWwW0QgGJp1KAoN2Q";

export const MapData = () => {
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
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <Marker latitude={50.813492} longitude={-0.372458} anchor="bottom" />
        <Marker latitude={50.813492} longitude={-0.372458} anchor="bottom" />
        <Marker latitude={50.813492} longitude={-0.372458} anchor="bottom" />
        <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
        <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
        <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
        <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
        <Marker latitude={50.8179} longitude={-0.3729} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431813} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431823} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431833} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431843} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431853} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431863} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431873} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431883} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431893} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431895} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431898} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.431899} anchor="bottom" />
        <Marker latitude={50.811389} longitude={-0.4318995} anchor="bottom" />
        <Marker latitude={50.810706} longitude={-0.364391} anchor="bottom" />
        <Marker latitude={50.827716} longitude={-0.141673} anchor="bottom" />
        <Marker latitude={50.826033} longitude={-0.142296} anchor="bottom" />
        <Marker latitude={50.8289} longitude={-0.142296} anchor="bottom" />
        <Marker latitude={50.8216405} longitude={-0.1308382} anchor="bottom" />
        <Marker latitude={50.8191049} longitude={-0.1266938} anchor="bottom" />
        <Marker latitude={50.827995} longitude={-0.141479} anchor="bottom" />
        <Marker latitude={50.822158} longitude={-0.144199} anchor="bottom" />
        <Marker latitude={50.8198085} longitude={-0.1355206} anchor="bottom" />
        <Marker latitude={50.8163271} longitude={-0.1121712} anchor="bottom" />
        <Marker latitude={50.8242199} longitude={-0.14481} anchor="bottom" />
        <Marker latitude={50.8736115} longitude={0.0192103} anchor="bottom" />
        <Marker latitude={50.822681} longitude={-0.14408} anchor="bottom" />
        <Marker latitude={50.819691} longitude={-0.1332213} anchor="bottom" />
        <Marker latitude={50.819733} longitude={-0.133217} anchor="bottom" />
        <Marker latitude={50.824996} longitude={-0.14285} anchor="bottom" />
        <Marker latitude={50.8172686} longitude={-0.1174275} anchor="bottom" />
        <Marker latitude={50.8249099} longitude={-0.159461} anchor="bottom" />
        <Marker latitude={50.8145597} longitude={-0.1081976} anchor="bottom" />
        <Marker latitude={50.8197701} longitude={-0.1254411} anchor="bottom" />
        <Marker latitude={50.825742} longitude={-0.142434} anchor="bottom" />
        <Marker latitude={50.8265146} longitude={-0.1520861} anchor="bottom" />
        <Marker latitude={50.828287} longitude={-0.141603} anchor="bottom" />
        <Marker latitude={50.828653} longitude={-0.141294} anchor="bottom" />
        <Marker latitude={50.8166144} longitude={-0.147456} anchor="bottom" />
        <Marker latitude={50.824364} longitude={-0.143171} anchor="bottom" />
        <Marker latitude={50.8177347} longitude={-0.1101429} anchor="bottom" />
        <Marker latitude={50.8183453} longitude={-0.1253383} anchor="bottom" />
        <Marker latitude={50.826829} longitude={-0.141971} anchor="bottom" />
        <Marker latitude={50.8198916} longitude={-0.1370037} anchor="bottom" />
        <Marker latitude={50.825402} longitude={-0.142655} anchor="bottom" />
        <Marker latitude={50.827318} longitude={-0.141854} anchor="bottom" />
        <Marker latitude={50.8247482} longitude={-0.1531025} anchor="bottom" />
        <Marker latitude={50.8258599} longitude={-0.1513022} anchor="bottom" />
        <Marker latitude={50.8239702} longitude={-0.1584867} anchor="bottom" />
        <Marker latitude={50.81648} longitude={-0.115245} anchor="bottom" />
        <Marker latitude={50.8198343} longitude={-0.1333396} anchor="bottom" />
        <Marker latitude={50.8205} longitude={-0.1363} anchor="bottom" />
        <Marker latitude={50.8218675} longitude={-0.1511411} anchor="bottom" />
        <Marker latitude={50.822841} longitude={-0.148312} anchor="bottom" />
        <Marker latitude={50.8232106} longitude={-0.1531099} anchor="bottom" />
        <Marker latitude={50.823664} longitude={-0.153362} anchor="bottom" />
        <Marker latitude={50.824} longitude={-0.1536} anchor="bottom" />
        <Marker latitude={50.8244792} longitude={-0.1621662} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.823746} longitude={-0.143431} anchor="bottom" />
        <Marker latitude={50.9325232} longitude={0.0298005} anchor="bottom" />
        <Marker latitude={50.8746139} longitude={0.0051153} anchor="bottom" />
        <Marker latitude={51.072791} longitude={-0.200333} anchor="bottom" />
        <Marker latitude={51.100045} longitude={0.051609} anchor="bottom" />
        <Marker latitude={51.057329} longitude={0.054371} anchor="bottom" />
        <Marker latitude={51.109592} longitude={-0.016494} anchor="bottom" />
        <Marker latitude={51.109626} longitude={-0.016545} anchor="bottom" />
        <Marker latitude={51.109606} longitude={-0.016807} anchor="bottom" />
        <Marker latitude={50.929866} longitude={-0.219119} anchor="bottom" />
        <Marker latitude={50.929795} longitude={-0.219303} anchor="bottom" />
        <Marker latitude={51.109776} longitude={-0.017747} anchor="bottom" />
        <Marker latitude={51.132218} longitude={-0.011766} anchor="bottom" />
        <Marker latitude={50.874614} longitude={0.005115} anchor="bottom" />
        <NavigationControl />
      </Map>
    </main>
  );
};
