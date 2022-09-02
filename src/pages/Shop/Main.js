import React, { useState } from 'react';
import './categorybar.scss';
import CollectionInner from './CollectionInner/CollectionControlTower';

function Shop() {
  const [sortbutton, setsortbutton] = useState(true);
  // const [fade, setfade] = useState();
  //true면 한줄에 4개
  //false면 한줄에 2개
  return (
    <>
      <div id="shopchoc">
        <div id="category_bar">
          <span className="tool_line" id="left_tool">
            <button className="sortbutton" onClick={() => setsortbutton(false)}>
              <img id="menu_box" src="images/menu.png" alt="menu" />
            </button>
            <button className="sortbutton" onClick={() => setsortbutton(true)}>
              <img id="menu_box2" src="images/menu2.png" alt="menu2" />
            </button>
          </span>
          <section id="right_tool">
            <span>SORT</span>
            <button className="downdirection_button">
              <img
                id="downdirection"
                src="images/left-arrow.png"
                alt="downdirection"
              />
            </button>
          </section>
        </div>
        <CollectionInner sortbutton={sortbutton} />
      </div>
    </>
  );
}

export default Shop;
