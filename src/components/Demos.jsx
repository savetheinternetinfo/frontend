import React, { useState, useEffect } from "react";
import { useStateValue } from "../contexts/StateContext";
import Masonry from "react-masonry-component";
import config from "../config";

import parse from "html-react-parser";
import leaflet from "leaflet";
import moment from "moment";
import axios from "axios";

function uniqueId(str) {
  return `${str}${Math.random()
    .toString(36)
    .substr(2, 9)}`;
}

const masonryOptions = {
  //columnWidth: '.gallery-sizer',
  elementSelector: ".gallery-item",
  percentPosition: true
};

function Demos() {
  const [{ translation, language }] = useStateValue();
  const [supporters, setSupporters] = useState(null);

  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios(config.api.supporters)
      .then(res => {
        setSupporters(
          res.data.supporter.map(supporter => {
            supporter.image =
              "https://supporters.savetheinternet.info" + supporter.image;
            return supporter;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const demomap = leaflet.map("demomap", {
      scrollWheelZoom: false
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

    const geojs = {
      type: "FeatureCollection",
      features: []
    };

    function bindPopoup(feature, layer) {
      let popupText = "";
      let eventItem = [];
      for (let index = 0; index < feature.properties.length; index++) {
        const element = feature.properties[index];
        if (element.fa_icon === "fa-clock") {
          let momentObj = moment(element.value);

          // Get locale data
          var localeData = moment.localeData(language);
          var format = localeData.longDateFormat("LLL");
          // Remove year part
          format = format.replace(/.YYYY/, "");
          element.value = momentObj.locale(language).format(format);
        }
        eventItem.push({ icon: element.fa_icon, value: element.value });
        popupText += `<p className="mb-0 font-thin">
                                    <i className="w-4 fa ${
                                      element.fa_icon
                                    }" aria-hidden="true"></i> ${element.value}
                                  </p>`;
      }
      let tmp = events;
      tmp.push(eventItem);
      setEvents(tmp);

      let popup = layer.bindPopup(popupText);
      popup.on("click", function(e) {
        demomap.flyTo(e.latlng, 14, {
          animate: true,
          duration: 1.5
        });
      });
    }

    axios
      .get(config.api.points)
      .then(response => {
        geojs.features = response.data.points.map(item => {
          return {
            type: "Feature",
            properties: [
              {
                fa_icon: "fa-map-marker",
                value: item.location
              },
              {
                fa_icon: "fa-clock",
                value: item.time
              },
              {
                fa_icon: "fb_event",
                value: item.facebookEvent || ""
              }
            ],
            STIDemo: item.sti_event,
            geometry: {
              type: "Point",
              coordinates: [item.latitude, item.longitude]
            }
          };
        });

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
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <React.Fragment>
        <div className="flex flex-no-wrap p-2 w-full overflow-x-scroll bg-blue">
          {events.map(x => {
            return (
              <div
                key={uniqueId("key-")}
                className="flex-none p-2"
                style={{ width: "17rem" }}
              >
                <div className="bg-blue-dark text-white rounded p-4 w-full h-full shadow rounded">
                  {x.map(e => {
                    return (
                      <p key={uniqueId("key-")} className="font-thin mt-2">
                        <span className="flex">
                          <i
                            className={"w-8 fa " + e.icon}
                            aria-hidden="true"
                          />
                          {parse(e.value)}
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
        {supporters !== null && (
          <div className="container mx-auto px-6 py-8">
            <h2>{translation["supporters_orga"]}</h2>
            <Masonry options={masonryOptions} updateOnEachImageLoad>
              {supporters.map((supporter, idx) => (
                <div
                  key={idx}
                  className="gallery-item w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                >
                  <a
                    className="block bg-blue rounded m-4 p-4"
                    href={supporter.url}
                  >
                    <img className="w-full" src={supporter.image} alt="" />
                    <div className="text-center mt-2">{supporter.name}</div>
                  </a>
                </div>
              ))}
            </Masonry>
          </div>
        )}
      </React.Fragment>
    </div>
  );
}

export default Demos;
