import React from 'react';
import { MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

const Markers = ({ locations }) => {
  return (
    <MarkerClusterer averageCenter={true} minLevel={10}>
      {locations.map(location => {
        const { id, name, latlng } = location;
        const { lat, lng } = latlng;
        return (
          <MapMarker key={id} position={{ lat: lat, lng: lng }} title={name} />
        );
      })}
    </MarkerClusterer>
  );
};

export default Markers;
