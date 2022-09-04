import { useEffect, useState } from 'react';
import Flavor from '../filteringkeyword/flavor';
import Price from '../filteringkeyword/Price';
import ProductType from '../filteringkeyword/productType';
import './filterbuttons.scss';

function FilterButtons(props) {
  const [display, setdisplay] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState(<ProductType />);
  const name = props.name;

  useEffect(() => {
    name === 'Producttype' && setFilterKeyword(<ProductType />);
    name === 'Price' && setFilterKeyword(<Price />);
    name === 'Flavor' && setFilterKeyword(<Flavor />);
  }, []);

  return (
    <div id="filterbuttonstyle">
      <ul className="button_style" id="bottomspace">
        <li className="smallfont1">{name}</li>
        <button className="plusbutton" onClick={() => setdisplay(p => !p)}>
          +
        </button>
      </ul>
      <div className="underline">{display && filterKeyword}</div>
    </div>
  );
}

export default FilterButtons;
