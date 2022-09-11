import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.scss';
import Modal from 'react-modal';

export default function Search({ setIsSearchClicked, setScrollPosition }) {
  const navigate = useNavigate();

  const [itemData, setItemData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const moveAndScrollToTop = url => {
    navigate(url);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  useEffect(() => {
    fetch('http://localhost:8000/product')
      .then(res => res.json())
      .then(data => setItemData(data));
  }, []);

  const filtered = itemData.filter(el => {
    return el.name
      .replace(/(\s*)(\“*)(\”*)(\'*)/g, '')
      .toUpperCase()
      .includes(inputValue.replace(/(\s*)/g, '').toUpperCase());
  });

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => {
        setIsSearchClicked(false);
        setScrollPosition(window.scrollY);
      }}
      ariaHideApp={false}
      className="modal_search"
    >
      <div className="input_container">
        <input
          type="text"
          name="text"
          className="input_search"
          placeholder="SEARCH"
          autocomplete="off"
          onChange={e => {
            setInputValue(e.target.value);
          }}
          style={{ textTransform: 'uppercase' }}
        />
      </div>

      <div className="items_container_x">
        {filtered.map(data => (
          <div
            key={data.id}
            className="item_container_x"
            onClick={() => {
              setIsSearchClicked(false);
              moveAndScrollToTop(`/product/detail/${data.id}`);
            }}
          >
            <img src={data.photos} alt="item" className="img" />
            <div className="info flex_center">
              <div className="name">{data.name}</div>
              <div className="price">$ {data.price.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
