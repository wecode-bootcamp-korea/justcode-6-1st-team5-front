import React from 'react';
import DaumPostcode from 'react-daum-postcode';

function PopupPostCode(props) {
  function handlePostCode(data) {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    props.setMainAddress(fullAddress);
    props.onClose();
  }

  const postCodeStyle = {
    position: 'absolute',
    top: 'calc(50% - 38vh)',
    left: 'calc(50% - 17.5vw)',
    width: '35vw',
    height: '80vh',
    border: '1px solid #999',
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
    </div>
  );
}

export default PopupPostCode;
