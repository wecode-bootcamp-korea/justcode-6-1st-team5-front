import React, { useState } from 'react';
import './shop.scss';
import CollectionInner from './CollectionInner/CollectionInner';
import Sortselector from './sortselector/Sortselector';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const [sortButton, setSortButton] = useState(true);
  const [sortSelector, setSortSelector] = useState(false);
  const navi = useNavigate();

  const bigGridClick = () => {
    setSortButton(false);
    navi(navi(`?min=9&max=39`));
  };

  return (
    <div id="shop_choc">
      <div id="category_bar">
        <span className="tool_line" id="left_tool">
          <button className="sortbutton" onClick={bigGridClick}>
            <img
              id="menu_box"
              src="https://i.esdrop.com/d/f/NlKPuBbCgn/O1JWoygg4y.png"
              alt="menu"
            />
          </button>
          <button className="sortbutton" onClick={() => setSortButton(true)}>
            <img
              id="menu_box2"
              src="https://i.esdrop.com/d/f/NlKPuBbCgn/H7pnwEl6Mr.png"
              alt="menu2"
            />
          </button>
        </span>
        <div>
          <button id="right_tool" onClick={() => setSortSelector(p => !p)}>
            SORT
          </button>
          <div id="selector_position">{sortSelector && <Sortselector />}</div>
        </div>
      </div>
      <CollectionInner sortbutton={sortButton} />
    </div>
  );
}

export default Shop;
