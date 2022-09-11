import { useState } from 'react';
import PopupPostCode from './PopupPostCode';
import Modal from 'react-modal';

export function Address({ mainAddress, setDetailedAddress, setMainAddress }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="cart_address_container flex_center">
      <div className="title">Shipping Destination</div>
      <div className="cart_address">
        <div className="input_address flex_center">
          <div className="main_address flex_center">{mainAddress}</div>
          <input
            type="text"
            className="detailed_address flex_center"
            placeholder="Detailed Address"
            autocomplete="off"
            onChange={e => {
              setDetailedAddress(e.target.value);
            }}
          />
          <button type="button" onClick={openPostCode} className="address_btn">
            FIND ADDRESS
          </button>
          <div id="popupDom">
            {isPopupOpen && (
              <Modal
                isOpen={true}
                onRequestClose={() => setIsPopupOpen(false)}
                ariaHideApp={false}
                className="addressModal"
              >
                <PopupPostCode
                  onClose={closePostCode}
                  setMainAddress={setMainAddress}
                />
              </Modal>
            )}
          </div>
        </div>
        <div className="address_text">
          No Saturday and Sunday delivery.
          <br /> We only ship domestically across the Korean Peninsula (include
          Jeju-do, Ulleung-do, Dok-do etc).
          <br />
          Shipping is not available in the following states and/or territories:
          <span className="bold"> All over the world except Korea</span>
        </div>
      </div>
    </div>
  );
}
