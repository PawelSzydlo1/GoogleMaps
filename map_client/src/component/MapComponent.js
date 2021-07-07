import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import React, { useState } from "react";

let dataRest = null;
let openMenu = null;
let positionYour = null;
export const MapComponent = (dataRestaurant, openActualMenu, yourPosition) => {
  dataRest = dataRestaurant;
  openMenu = openActualMenu;
  positionYour = yourPosition;
};

export function Map() {
  const [selectedRest, setSelectedRest] = useState(null);
  const [statsUser, setStatsUser] = useState(true);
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 52.232084, lng: 21.015831 }}
    >
      <Marker
        key="UserLocation"
        position={{ lat: positionYour.lat, lng: positionYour.lng }}
      ></Marker>
      {statsUser && (
        <InfoWindow position={{ lat: positionYour.lat, lng: positionYour.lng }}>
          <p>You</p>
        </InfoWindow>
      )}

      {dataRest &&
        dataRest.map((rest) => (
          <Marker
            key={rest.id}
            position={{ lat: rest.lat, lng: rest.lng }}
            onClick={() => {
              setSelectedRest(rest);
            }}
          />
        ))}

      {selectedRest && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedRest(null);
          }}
          position={{ lat: selectedRest.lat, lng: selectedRest.lng }}
        >
          <div style={{ display: `flex`, flexDirection: `column` }}>
            <p>{selectedRest.restaurantName}</p>
            <div
              type="button"
              className="btn btn-success"
              style={{ fontSize: `10px` }}
              onClick={() => openMenu(selectedRest)}
            >
              Menu
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
