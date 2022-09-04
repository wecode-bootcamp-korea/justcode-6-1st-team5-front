import { useEffect, useState } from 'react';
import Flavor from '../filteringkeyword/flavor';
import Price from '../filteringkeyword/Price';
import ProductType from '../filteringkeyword/productType';
import './filterbuttons.scss';

function FilterButtons(props) {
  const [display, setdisplay] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState();
  const { name, mission } = props;

  useEffect(() => {
    name === 'Producttype' &&
      setFilterKeyword(<ProductType mission={mission} />);
    name === 'Price' && setFilterKeyword(<Price mission={mission} />);
    name === 'Flavor' && setFilterKeyword(<Flavor mission={mission} />);
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
