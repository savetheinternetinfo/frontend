import React, { useState, useEffect, useRef } from "react";
import { useStateValue } from "../contexts/StateContext";
import Masonry from "react-masonry-component";
import config from "../config";

import parse from "html-react-parser";
import { Map, TileLayer } from "react-leaflet";
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

    function bindPopoup(feature, layer) {
      let popupText = `
        <p className="font-thin mt-2">
          <i className="w-8 fa fa-map-marker" aria-hidden="true" />
          ${feature.event.location}
        </p>
        <p className="font-thin mt-2">
          <i className="w-8 fa fa-clock" aria-hidden="true" />
          ${moment(feature.event.time).format(eventDateFormat)}
        </p>
      `;

      if (
        feature.event.facebookEvent &&
        feature.event.facebookEvent.length > 0
      ) {
        popupText += `<p className="font-thin mt-2">
          <i className="w-8 fa" aria-hidden="true" />
          <a href="${
            feature.event.facebookEvent
          }" target="_blank">Mehr Informationen</a>
        </p>`;
      }

      let popup = layer.bindPopup(popupText);
      popup.on("click", function(e) {
        map.flyTo(e.latlng, 14, {
          animate: true,
          duration: 1.5
        });
      });
    }

    axios.get(config.api.points).then(response => {
      setEvents(response.data.points);
      geojs.features = response.data.points.map(item => {
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
      map.fitBounds(geoJSONLayer.getBounds());
    });
  }, []);

  const handleEventClick = e => () => {
    if (mapRef.current && mapRef.current.leafletElement) {
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
              className="bg-blue-dark text-white rounded p-4 w-full h-full shadow rounded font-thin"
              onClick={handleEventClick(e)}
            >
              <p className="font-thin mt-2">
                <i className="w-8 fa fa-map-marker" aria-hidden="true" />
                {parse(e.location)}
              </p>
              <p className="font-thin mt-2">
                <i className="w-8 fa fa-clock" aria-hidden="true" />
                {moment(e.time).format(eventDateFormat)}
              </p>
              {e.facebookEvent && (
                <p className="font-thin mt-2 ml-8">
                  <a href={e.facebookEvent} target="_blank">
                    Mehr Informationen
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Map
        ref={mapRef}
        scrollWheelZoom={config.scrollWheelZoom}
        style={{ height: window.innerHeight / 1.3 + "px" }}
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
