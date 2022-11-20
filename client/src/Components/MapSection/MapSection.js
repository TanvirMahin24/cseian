import React from "react";
import { MapContainer, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapSection.module.css";
import data from "./MapData/MapData";

const MapSection = () => {
  var centerLat = (data.minLat + data.maxLat) / 2;
  var distanceLat = data.maxLat - data.minLat;
  var bufferLat = distanceLat * 0.05;
  var centerLong = (data.minLong + data.maxLong) / 2;
  var distanceLong = data.maxLong - data.minLong;
  var bufferLong = distanceLong * 0.05;
  return (
    <div>
      <MapContainer
        className={styles.map}
        zoomAnimation={true}
        zoom={2}
        center={[centerLat, centerLong]}
        bounds={[
          [data.minLat - bufferLat, data.minLong - bufferLong],
          [data.maxLat + bufferLat, data.maxLong + bufferLong],
        ]}
      >
        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data.city.map((city, k) => {
          return (
            <CircleMarker
              key={k}
              center={[city["coordinates"][1], city["coordinates"][0]]}
              radius={20 * Math.log(city["population"] / 10000000)}
              fillOpacity={0.7}
              fillColor="#D74261"
              stroke={false}
            >
              <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                <span>
                  {city["name"] +
                    ": " +
                    "Population" +
                    " " +
                    city["population"]}
                </span>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapSection;
