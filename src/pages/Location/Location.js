import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import Location_list from './Location_list';
import './Location.scss';

const Location = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/locationData.json')
      .then(res => res.json())
      .then(json => {
        setLocations(json);
      });
  }, []);
  return (
    <>
      <h1 className="store_locator">STORE LOCATOR</h1>
      <div className="location_container">
        <div className="location_list">
          <div className="search">
            <input placeholder="Type a postcode or address..." />
            <button>
              <img src="/image/search_icon.png" />
            </button>
          </div>
          <div className="list">
            {locations !== undefined &&
              locations.map(location => {
                return <Location_list key={location.id} data={location} />;
              })}
          </div>
        </div>
        <div className="location_map">
          <Map
            center={{
              lat: 35.15770278051412,
              lng: 129.0604061307556,
            }}
            style={{ width: '100%', height: '500px' }}
            level={10}
          >
            <MapMarker position={{ lat: 35.1577, lng: 129.0604 }}>
              <div style={{ color: '#000' }}>ROYCE' Seomyeon</div>
            </MapMarker>
            <MapMarker position={{ lat: 35.1486, lng: 129.0653 }}>
              <div style={{ color: '#000' }}>ROYCE' BIFC</div>
            </MapMarker>
          </Map>
        </div>
      </div>
    </>
  );
};

export default Location;
