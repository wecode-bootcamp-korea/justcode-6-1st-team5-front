import { useState } from 'react';
import Flavor from '../filteringkeyword/flavor';
import Price from '../filteringkeyword/Price';
import ProductType from '../filteringkeyword/productType';
import './filterbuttons.scss';

function FilterButtons(props) {
  const [display, setDisplay] = useState(false);
  //const [filterKeyword, setFilterKeyword] = useState(); 기존에는 상태값으로 관리했으나 그럴필요가 없었다.
  const {
    name,
    mission,
    mission1,
    mission2,
    priceValue,
    setPriceValue,
    missionstate,
  } = props;

  let setFilterKeyword;
  if (name === 'Producttype') {
    setFilterKeyword = <ProductType mission1={mission1} mission2={mission2} />;
  } else if (name === 'Price') {
    setFilterKeyword = (
      <Price
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        mission={mission}
      />
    );
  } else if (name === 'Flavor') {
    setFilterKeyword = <Flavor mission={mission} missionstate={missionstate} />;
  }
  //선언한 변수값을 if문으로 분기에 따라서 다른 값을 넣을 수 있다.
  return (
    <div id="filter_button_style">
      <ul className="button_style" id="bottom_space">
        <li className="small_font1">{name}</li>
        <button className="plus_button" onClick={() => setDisplay(p => !p)}>
          +
        </button>
      </ul>
      <div className="under_line">{display && setFilterKeyword}</div>
    </div>
  );
}

export default FilterButtons;
