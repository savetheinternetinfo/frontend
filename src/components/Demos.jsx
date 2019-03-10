import React, { useState, useContext, useEffect } from "react";
import leaflet from "leaflet";
import geojs from "../mapcoords.json";
import moment from "moment";
import { LanguageContext } from "../contexts/LanguageContext";
import Footer from "./common/Footer";
import Header from "./common/Header";

function Demos() {
  const ctx = useContext(LanguageContext);
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    if (count === 0) {
      const demomap = leaflet.map("demomap", {
        scrollWheelZoom: false,
      });
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
        let na = [];
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
          na.push({ icon: element.fa_icon, value: element.value });
          popupText += `<p class="mb-0 font-thin"><i class="fa ${
            element.fa_icon
          }" aria-hidden="true"></i> ${element.value}</p>`;
        }
        let tmp = events;
        tmp.push(na);
        setEvents(tmp);
        /*let listText = `<li class="shadow-md p-2 mb-4 rounded-lg cursor-pointer" id="markerListItem" data-latlang="${
          feature.geometry.coordinates
        }">${popupText}</li>`;*/
        let popup = layer.bindPopup(popupText);
        popup.on("click", function(e) {
          demomap.flyTo(e.latlng, 14, {
            animate: true,
            duration: 1.5
          });
        });
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
      <Header />
      <React.Fragment>
        <div className="flex flex-no-wrap p-2 w-full overflow-x-scroll bg-blue-light">
          {events.map(x => {
            return (
              <div className="flex-none p-2" style={{'width': '15rem'}}>
                <div className="bg-blue text-white rounded p-4 w-full h-full shadow rounded">
                  {x.map(e => {
                    return (
                      <p class="font-thin mt-2">
                        <span className="flex">
                          <i
                            className={"w-8 fa " + e.icon}
                            aria-hidden="true"
                          />
                          <div dangerouslySetInnerHTML={{ __html: e.value }} />
                        </span>
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="w-full bg-grey-lightest z-10"
          style={{ height: window.innerHeight / 1.3 + "px" }}
          id="demomap"
        />
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default Demos;
