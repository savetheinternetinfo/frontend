import React, { useState, useEffect, useRef } from "react";
import { useStateValue } from "../contexts/StateContext";
import Masonry from "react-masonry-component";
import config from "../config";

import parse from "html-react-parser";
import { Map, TileLayer } from "react-leaflet";
import leaflet from "leaflet";
import moment from "moment";
import axios from "axios";
import { Element as ScrollElement, scroller } from "react-scroll";

import pinBlankSVG from "../assets/leaflet/pin_blank.svg";
import pinStiSVG from "../assets/leaflet/pin_sti.svg";

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

const STIIcon = leaflet.icon({
  iconUrl: pinStiSVG,
  iconSize: [32, 32],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});
const nonSTIIcon = leaflet.icon({
  iconUrl: pinBlankSVG,
  iconSize: [32, 32],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

function Demos() {
  const [{ translation, language }] = useStateValue();
  const [supporters, setSupporters] = useState(null);

  const [events, setEvents] = useState([]);
  const mapRef = useRef();

  const eventDateFormat = moment
    .localeData(language)
    .longDateFormat("LLL")
    .replace(/.YYYY/, "");

  useEffect(() => {
    if (supporters === null) {
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
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    const geojs = {
      type: "FeatureCollection",
      features: []
    };
    let urlHash =
      window.location.hash.length > 1
        ? decodeURI(window.location.hash.substr(1)).toLowerCase()
        : false;

    function bindPopoup(feature, layer) {
      let popupText = `
        <div class="mt-2 flex items-center">
          <i class="block w-4 mr-2 flex-none fa fa-map-marker text-center" aria-hidden="true"></i>
          <div>${feature.event.location}</div>
        </div>
        <div class="mt-2 flex items-center">
          <i class="block w-4 mr-2 flex-none fa fa-clock text-center" aria-hidden="true"></i>
          <div>${feature.event.time.format(eventDateFormat)}</div>
        </div>
      `;

      if (
        feature.event.facebookEvent &&
        feature.event.facebookEvent.length > 0
      ) {
        popupText += `<div class="mt-2 ml-6">
          <a href="${
            feature.event.facebookEvent
          }" target="_blank">Mehr Informationen</a>
        </div>`;
      }

      const flyTo = latlng =>
        map.flyTo(latlng, 14, {
          animate: true,
          duration: 1.5
        });

      let popup = layer.bindPopup(popupText);
      popup.on("click", e => {
        flyTo(e.latlng);
        window.location.hash = feature.event.city;
      });

      if (urlHash && feature.event.city.toLowerCase() === urlHash) {
        urlHash = false;
        scroller.scrollTo("map", { smooth: true, duration: 500 });
        setTimeout(() => {
          flyTo(popup.getLatLng());
          popup.openPopup();
        }, 0); // open the popup after it was added.
      }
    }

    axios.get(config.api.points).then(response => {
      const now = moment().subtract(6, "hours");
      const points = [];
      response.data.points
        .map(p => {
          return {
            ...p,
            time: moment(p.time),
            city: p.location.split(" -")[0].toLowerCase()
          };
        })
        .filter(p => p.time > now);
      setEvents(points);
      geojs.features = points.map(item => {
        return {
          type: "Feature",
          event: item,
          STIDemo: item.sti_event,
          geometry: {
            type: "Point",
            coordinates: [item.longitude, item.latitude]
          }
        };
      });

      const geoJSONLayer = leaflet.geoJSON(geojs, {
        pointToLayer: function(feature, latlng) {
          return leaflet.marker(latlng, {
            icon: feature["STIDemo"] ? STIIcon : nonSTIIcon
          });
        },
        onEachFeature: bindPopoup
      });
      geoJSONLayer.addTo(map);
      if (geojs.features.length > 1) {
        map.fitBounds(geoJSONLayer.getBounds());
      } else if (geojs.features.length === 1) {
        map.setView(
          new leaflet.LatLng(
            geojs.features[0].geometry.coordinates[1],
            geojs.features[0].geometry.coordinates[0]
          ),
          4
        );
      } else {
        map.setView(new leaflet.LatLng(50.10222, 9.25442), 5);
      }
    });
  }, []);

  const handleEventClick = e => () => {
    if (mapRef.current && mapRef.current.leafletElement) {
      window.location.hash = e.city;
      mapRef.current.leafletElement.flyTo([e.latitude, e.longitude], 14, {
        animate: true,
        duration: 1.5
      });
    }
  };

  return (
    <div>
      <div className="flex flex-no-wrap p-2 w-full overflow-x-scroll bg-blue">
        {events.map(e => (
          <div
            key={uniqueId("key-")}
            className="flex-none p-2"
            style={{ width: "17rem" }}
          >
            <div
              className="bg-blue-dark text-white rounded p-4 w-full h-full shadow rounded"
              onClick={handleEventClick(e)}
            >
              <div className="mt-2 flex items-start cursor-pointer">
                <i
                  className="block flex-none w-5 mt-1 mr-3 fa fa-map-marker text-center"
                  aria-hidden="true"
                />
                <div>{parse(e.location)}</div>
              </div>
              <div className="mt-3 flex items-start">
                <i
                  className="block flex-none w-5 mt-1 mr-3 fa fa-clock text-center"
                  aria-hidden="true"
                />
                <div>{moment(e.time).format(eventDateFormat)}</div>
              </div>
              {e.facebookEvent && (
                <div className="mt-2 ml-8">
                  <a
                    href={e.facebookEvent}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mehr Informationen
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <ScrollElement className="pt-12 -mt-12" name="map" />
      <Map
        ref={mapRef}
        scrollWheelZoom={config.scrollWheelZoom}
        style={{ height: window.innerHeight / 1.3 + "px" }}
        onClick={() => {
          mapRef.current.leafletElement.scrollWheelZoom.enable();
        }}
      >
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors | Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL | Save the Internet!"
        />
      </Map>
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
                  <img className="block mx-auto" src={supporter.image} alt="" />
                  <div className="w-full text-center mt-4 break-word overflow-x-hidden">
                    {supporter.name}
                  </div>
                </a>
              </div>
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
}

export default Demos;
