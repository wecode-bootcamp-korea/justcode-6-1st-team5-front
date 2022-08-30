import React from 'react';
import './Trending.scss';
import ItemContainer from '../ItemContainer/ItemContainer';
import Xbar from '../Xbar/Xbar';

export default function Trending() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const datas = arr.map(data => (
    <ItemContainer
      key={data}
      img="./Images/home_part_1.jpg"
      name="로이시 시그니처 초콜릿"
      rate={5}
      price={'32,000'}
    />
  ));

  return (
    <div className="home_trending ">
      <div className="title_1 flex_center">특집 컬렉션</div>
      <div className="menu_container flex_center">
        <div className="title_2">인기 상품</div>
      </div>
      <div className="x_bar">
        <Xbar data={datas} />
      </div>

      <div></div>
    </div>
  );
}
