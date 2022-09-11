import React, { useState, useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';

import LocationList from './LocationList';
import Markers from './Markers';
import './Location.scss';

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [value, setValue] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/location')
      .then(res => res.json())
      .then(json => {
        setLocations(json);
      });
  }, []);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onClick = e => {
    setSearchInput(e.target.innerHTML);
  };

  const handleSearch = () => {
    setSearchInput(value);
  };

  const setStores = locations.filter(location => {
    return location.name.toLowerCase().includes(searchInput.toLowerCase());
  });

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
            <button onClick={handleSearch}>
              <img src="/image/search_icon.png" alt="pin_icon" />
            </button>
          </div>
          <div className="list">
            {setStores !== undefined &&
              setStores.map(store => {
                return (
                  <LocationList key={store.id} data={store} onClick={onClick} />
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
