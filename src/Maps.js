import React, { useEffect, useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Icon } from "leaflet";
import { useMap } from "react-leaflet/hooks";

import { point } from "@turf/helpers";
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";

const position = [19.432608, -99.133209];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView([selectPosition.lat, selectPosition.lon], 15.1);
    }
  }, [selectPosition, map]);

  return null;
}

function Maps(props) {
  const { selectPosition, setSelectedAgeb } = props; // Add setSelectedAgeb prop
  const [geoData, setGeoData] = useState(null);
  const [selectedPolygon, setSelectedPolygon] = useState(null);
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  useEffect(() => {
    fetch("/agebs.geojson")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGeoData(data);
      })
      .catch((error) => {
        console.error("Error fetching the GeoJSON data:", error);
      });
  }, []);

  useEffect(() => {
    if (geoData && selectPosition && selectPosition.lat && selectPosition.lon) {
      const lat = parseFloat(selectPosition.lat);
      const lon = parseFloat(selectPosition.lon);

      if (!isNaN(lat) && !isNaN(lon)) {
        try {
          const pt = point([lon, lat]);

          const containingPolygon = geoData.features.find((feature) => {
            return booleanPointInPolygon(pt, feature);
          });

          setSelectedPolygon(containingPolygon);
          setSelectedAgeb(containingPolygon); // Set the selected polygon in the parent state
          console.log("Selected polygon:", containingPolygon);
        } catch (error) {
          console.error("Error in polygon selection:", error);
        }
      } else {
        console.error("Invalid coordinates:", selectPosition);
      }
    }
  }, [geoData, selectPosition, setSelectedAgeb]);

  const customIcon = new Icon({
    iconUrl: require("./img/marker.webp"),
    iconSize: [20, 28],
  });

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectPosition && (
          <Marker position={locationSelection} icon={customIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        <ResetCenterView selectPosition={selectPosition} />
        {selectedPolygon && (
          <GeoJSON
            key={JSON.stringify(selectedPolygon)}
            data={selectedPolygon}
            style={{ color: "#4361EE", fillColor: "#4361EE", fillOpacity: 0.3 }}
          >
            <Popup>This is the AGEB containing the selected point.</Popup>
          </GeoJSON>
        )}
        {geoData && (
          <GeoJSON data={geoData} style={{ color: "#735F3D", weight: 0.6 }} />
        )}
      </MapContainer>
    </div>
  );
}

export default Maps;
