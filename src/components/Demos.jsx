import Navbar from "./Navbar";
import React, { useState, useRef, useContext, useEffect } from "react";
import leaflet from "leaflet";
import geojs from "../mapcoords.json";
import moment from "moment";
import { LanguageContext } from "../contexts/LanguageContext";

function Demos() {
  const ctx = useContext(LanguageContext);
  const [count, setCount] = useState(0);
  const eventlist = useRef(null);
  useEffect(() => {
    if (count === 0) {
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

      function bindPopoup(feature, layer) {
        let popupText = "";

        for (let index = 0; index < feature.properties.length; index++) {
          const element = feature.properties[index];
          if (element.fa_icon === "fa-clock-o") {
            let momentObj = moment(element.value, "DD.MM.YYYY H:m");

            // Get locale data
            var localeData = moment.localeData(ctx.language);
            var format = localeData.longDateFormat("LLL");
            // Remove year part
            format = format.replace(/.YYYY/, "");
            element.value = momentObj.locale(ctx.language).format(format);
          }
          popupText += `<p class="mb-0 font-thin"><i class="fa ${
            element.fa_icon
          }" aria-hidden="true"></i> ${element.value}</p>`;
        }

        let listText = `<li class="shadow-md p-2 mb-4 rounded-lg cursor-pointer" id="markerListItem" data-latlang="${
          feature.geometry.coordinates
        }">${popupText}</li>`;
        let popup = layer.bindPopup(popupText);
        popup.on("click", function(e) {
          demomap.flyTo(e.latlng, 14, {
            animate: true,
            duration: 1.5
          });
        });
        //jQuery("#event-list").append(listText);
      }

      let geoJSONLayer = leaflet
        .geoJSON(geojs, {
          pointToLayer: function(feature, latlng) {
            if (feature["STIDemo"]) {
              return leaflet.marker(latlng, { icon: STIIcon });
            }
            return leaflet.marker(latlng, { icon: nonSTIIcon });
          },
          onEachFeature: bindPopoup
        })
        .addTo(demomap);
      demomap.fitBounds(geoJSONLayer.getBounds());
      setCount(1);
    }
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
        <div className="" ref={eventlist} />
      </React.Fragment>
    </div>
  );
}

export default Demos;
