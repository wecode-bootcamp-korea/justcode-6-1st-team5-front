import { useEffect, useState, useRef } from 'react';
import './Trending.scss';
import ItemContainer from '../ItemContainer/ItemContainer';
import Carousel from '../Carousel/Carousel';

export default function Trending() {
  const trRef = useRef();
  const ppRef = useRef();
  const [isPpClicked, setIsPpClicked] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [trDatas, setTrDatas] = useState(
    arr.map(data => (
      <ItemContainer
        key={data}
        img="/Images/home_part_1.jpg"
        name="ROCYE SIGNATURE CHOCOLATE"
        rate={5}
        price={60.99}
      />
    ))
  );

  const [ppDatas, setPpDatas] = useState(
    arr.map(data => (
      <ItemContainer
        key={data}
        img="/Images/home_part_1.jpg"
        name="ROCYE SIGNATURE CHOCOLATE"
        rate={5}
        price={60.99}
      />
    ))
  );

  useEffect(() => {
    fetch('/mockdata/products.json')
      .then(res => res.json())
      .then(data => {
        setTrDatas(
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

  // useEffect(() => {
  //   fetch('/mockdata/products.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setLEDatas(
  //         data.map(data => {
  //           return (
  //             <ItemContainer
  //               id={data.id}
  //               key={data.id}
  //               img={data.photo}
  //               name={data.name}
  //               rate={data.rate}
  //               price={data.price}
  //             />
  //           );
  //         })
  //       );
  //     });
  // }, []);

  return (
    <div className="home_trending ">
      <div className="sub_title flex_center">FEATURED COLLECTIONS</div>
      <div className="menu_container flex_center">
        <div
          ref={trRef}
          className={isPpClicked ? 'unpicked_title' : 'title'}
          onClick={() => {
            if (isPpClicked === true) {
              setIsPpClicked(false);
            }
          }}
        >
          TRENDING
        </div>
        <div
          ref={ppRef}
          className={isPpClicked ? 'title' : 'unpicked_title'}
          onClick={() => {
            if (isPpClicked === false) {
              setIsPpClicked(true);
            }
          }}
        >
          POPULAR COLLECTION
        </div>
      </div>
      <Carousel
        data={isPpClicked ? ppDatas : trDatas}
        isPpClicked={isPpClicked}
      />
    </div>
  );
}
