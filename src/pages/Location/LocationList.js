import React from 'react';

const Location_list = ({ data }) => {
  const { name, address, phone } = data;

  return (
    <li>
      <span className="pin_icon">
        <img src="/image/pin.png" />
      </span>
      <div className="location_info">
        <p className="store_name">{name}</p>
        <p className="store_address">{address}</p>
        <a className="phone_number">{phone}</a>
      </div>
    </li>
  );
};

export default Location_list;
