import { useEffect, useState } from 'react';
import Flavor from './filteringkeyword/flavor';
import Price from './filteringkeyword/Price';
import ProductType from './filteringkeyword/productType';

function FilterButtonPart(props) {
  const [display, setdisplay] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState(<ProductType />);
  const name = props.buttonname;
  const goodsstate = props.goodsstate;

  useEffect(() => {
    name === 'Producttype' &&
      setFilterKeyword(
        <ProductType
          goodsstate={goodsstate}
          createfilterviewer={props.createfilterviewer}
        />
      );
    name === 'Price' &&
      setFilterKeyword(<Price createfilterviewer={props.createfilterviewer} />);
    name === 'Flavor' &&
      setFilterKeyword(
        <Flavor createfilterviewer={props.createfilterviewer} />
      );
  }, [setdisplay]);

  return (
    <div id="filterbuttonstyle">
      <ul className="button_style" id="bottomspace">
        <li className="smallfont1">{props.buttonname}</li>
        <button className="plusbutton" onClick={() => setdisplay(p => !p)}>
          +
        </button>
      </ul>
      <div className="underline">{display && filterKeyword}</div>
    </div>
  );
}

export default FilterButtonPart;
