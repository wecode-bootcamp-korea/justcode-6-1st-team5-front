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
    name === 'producttype' &&
      setFilterKeyword(<ProductType goodsstate={goodsstate} />);
    name === 'price' && setFilterKeyword(<Price />);
    name === 'flavor' && setFilterKeyword(<Flavor />);
  }, [setdisplay]);

  return (
    <>
      <ul className="button_style" id="bottomspace">
        <li className="smallfont1">{props.buttonname}</li>
        <button className="plusbutton" onClick={() => setdisplay(p => !p)}>
          +
        </button>
      </ul>
      <div className="underline">{display && filterKeyword}</div>
    </>
  );
}

export default FilterButtonPart;
