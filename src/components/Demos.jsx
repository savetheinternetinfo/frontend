import Navbar from "./Navbar";
import React, { useEffect } from "react";
import leaflet from "leaflet";
import geojs from "../mapcoords.json";

function Demos() {
  useEffect(() => {
    const demomap = leaflet.map("demomap");
    leaflet
      .tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL | Save the Internet!'
        }
      )
      .addTo(demomap);

    const STIIcon = leaflet.icon({
      iconUrl: "/pin_sti.png",
      iconSize: [32, 32],
      iconAnchor: [16, 37],
      popupAnchor: [0, -28]
    });
    const nonSTIIcon = leaflet.icon({
      iconUrl: "/pin_blank.png",
      iconSize: [32, 32],
      iconAnchor: [16, 37],
      popupAnchor: [0, -28]
    });

    let geoJSONLayer = leaflet
      .geoJSON(geojs, {
        pointToLayer: function(feature, latlng) {
          if (feature["STIDemo"]) {
            return leaflet.marker(latlng, { icon: STIIcon });
          }
          return leaflet.marker(latlng, { icon: nonSTIIcon });
        }
        //onEachFeature: bindPopoup
      })
      .addTo(demomap);
    demomap.fitBounds(geoJSONLayer.getBounds());
  });
  return (
    <div>
      <React.Fragment>
        <div class="w-full bg-blue h-auto">
          <Navbar />
        </div>
        <div
          className="w-full bg-grey-lightest z-10"
          style={{ height: window.innerHeight / 1.8 + "px" }}
          id="demomap"
        />
      </React.Fragment>
    </div>
  );
}

export default Demos;
