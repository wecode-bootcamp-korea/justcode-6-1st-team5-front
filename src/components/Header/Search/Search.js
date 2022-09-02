import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';
import Modal from 'react-modal';

export default function Search({ setIsSearchClicked }) {
  const navigate = useNavigate();

  let price = 10000;
  const [itemData, setItemData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setItemData(data));
  }, []);

  const filtered = itemData.filter(el => {
    return el.name
      .replace(/(\s*)/g, '')
      .includes(inputValue.replace(/(\s*)/g, ''));
  });

  console.log('filtered', filtered);

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => setIsSearchClicked(false)}
      className="modal_search"
    >
      <div className="input_container">
        <input
          type="text"
          name="text"
          className="input_search"
          placeholder="검색어를 입력해주세요."
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
      </div>

      <div className="items_container_x">
        {filtered.map(data => (
          <div
            key={data.id}
            className="item_container_x"
            onClick={() => {
              setIsSearchClicked(false);
              navigate(`/collections/all-products/${data.id}`);
            }}
          >
            <img src={data.photo} alt="item" className="img" />
            <div className="info flex_center">
              <div className="name">{data.name}</div>
              <div className="price">₩ {data.price.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
