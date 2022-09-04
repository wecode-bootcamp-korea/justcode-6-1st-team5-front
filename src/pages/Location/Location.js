import React from 'react';

import './Location.scss';

const Location = () => {
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
            <li>
              <span className="pin_icon">
                <img src="/image/pin.png" />
              </span>
              <div className="location_info">
                <p className="store_name">ROYCE' Seoul Square</p>
                <p className="store_address">
                  416, Hangang-daero, Jung-gu, Seoul, Republic of Korea
                </p>
                <a className="phone_number">02-521-8238</a>
              </div>
            </li>
            <li>
              <span className="pin_icon">
                <img src="/image/pin.png" />
              </span>
              <div className="location_info">
                <p className="store_name">ROYCE' Seoul Square</p>
                <p className="store_address">
                  416, Hangang-daero, Jung-gu, Seoul, Republic of Korea
                </p>
                <a className="phone_number">02-521-8238</a>
              </div>
            </li>
          </div>
        </div>
        <div className="location_map"></div>
      </div>
    </>
  );
};

export default Location;
