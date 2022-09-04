import { useEffect, useState } from 'react';
import './Trending.scss';
import ItemContainer from '../ItemContainer/ItemContainer';
import Carousel from '../Carousel/Carousel';

export default function Trending() {
  const arr = [1, 2, 3, 4];

  const [datas, setDatas] = useState(
    arr.map(data => (
      <ItemContainer
        key={data}
        img="/Images/home_part_1.jpg"
        name="ROCYE SIGNATURE CHOCOLATE"
        rate={5}
        price={'32,000'}
      />
    ))
  );

  useEffect(() => {
    fetch('/mockdata/products.json')
      .then(res => res.json())
      .then(data => {
        setDatas(
          data.map(data => {
            return (
              <ItemContainer
                id={data.id}
                key={data.id}
                img={data.photo}
                name={data.name}
                rate={data.rate}
                price={data.price}
              />
            );
          })
        );
      });
  }, []);

  return (
    <div className="home_trending ">
      <div className="title_1 flex_center">FEATURED COLLECTIONS</div>
      <div className="menu_container flex_center">
        <div className="title_2">TRENDING</div>
      </div>
      <Carousel data={datas} />
    </div>
  );
}
