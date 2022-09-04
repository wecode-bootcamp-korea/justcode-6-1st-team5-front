import React from 'react';

const Location_list = ({ data }) => {
  console.log(data);
  const { store_name, store_address, store_phone, store_lat, store_lng } = data;
  return (
    <li>
      <span className="pin_icon">
        <img src="/image/pin.png" />
      </span>
      <div className="location_info">
        <p className="store_name">{store_name}</p>
        <p className="store_address">{store_address}</p>
        <a className="phone_number">{store_phone}</a>
      </div>
    </li>
  );
};

export default Location_list;
