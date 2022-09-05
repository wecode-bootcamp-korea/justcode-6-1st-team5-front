import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

const MapMarkers = ({ marker }) => {
  console.log(marker);
  const { name, address, phone, latlng } = marker;
  console.log(latlng);
  return <></>;
};

export default MapMarkers;
