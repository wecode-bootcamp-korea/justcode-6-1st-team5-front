import React, { useState, useEffect, useRef } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';

import LocationList from './LocationList';
import Markers from './Markers';
import './Location.scss';

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:10010/location')
  //     .then(res => res.json())
  //     .then(json => {
  //       setLocations(json);
  //       console.log(json);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/locationData.json')
      .then(res => res.json())
      .then(json => {
        setLocations(json);
      });
  }, []);

  const onChange = e => {
    setSearchInput(e.target.value);
  };

  const onClick = name => {
    // console.log(e.target.innerHTML.toLowerCase());
    // setSearchInput(e.target.innerHTML.toLowerCase());
    setSearchInput(name);
  };

  const setStores = locations.filter(location => {
    return location.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  console.log(setStores);

  return (
    <>
      <h1 className="store_locator">STORE LOCATOR</h1>
      <div className="location_container">
        <div className="location_list">
          <div className="search">
            <input
              onChange={onChange}
              placeholder="Type a postcode or address..."
            />
            <button>
              <img src="/image/search_icon.png" />
            </button>
          </div>
          <div className="list">
            {setStores !== undefined &&
              setStores.map(store => {
                return (
                  <LocationList
                    key={locations.id}
                    data={store}
                    onClick={onClick}
                  />
                );
              })}
          </div>
        </div>
        <div className="location_map">
          <Map
            center={{
              lat: 36.43308,
              lng: 128.040514,
            }}
            style={{
              width: '100%',
              height: '500px',
            }}
            level={13}
          >
            <Markers locations={setStores} />
          </Map>
        </div>
      </div>
    </>
  );
};

export default Location;
