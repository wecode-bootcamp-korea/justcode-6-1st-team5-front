import React, { useState, useEffect, useRef } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

import LocationList from './LocationList';
import Markers from './Markers';
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
                return <LocationList key={locations.id} data={location} />;
              })}
          </div>
        </div>
        <div className="location_map">
          <Map
            center={{
              lat: 37.555611,
              lng: 126.973511,
            }}
            style={{
              width: '100%',
              height: '500px',
            }}
            level={10}
          >
            <Markers locations={locations} />
          </Map>
        </div>
      </div>
    </>
  );
};

export default Location;
