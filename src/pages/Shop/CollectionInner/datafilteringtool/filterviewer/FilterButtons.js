import { useEffect, useState } from 'react';
import Flavor from '../filteringkeyword/flavor';
import Price from '../filteringkeyword/Price';
import ProductType from '../filteringkeyword/productType';
import './filterbuttons.scss';

function FilterButtons(props) {
  const [display, setDisplay] = useState(false);
  const [filterKeyword, setFilterKeyword] = useState();
  const { name, mission } = props;

  useEffect(() => {
    name === 'Producttype' &&
      setFilterKeyword(<ProductType mission={mission} />);
    name === 'Price' && setFilterKeyword(<Price mission={mission} />);
    name === 'Flavor' && setFilterKeyword(<Flavor mission={mission} />);
  }, []);

  return (
    <div id="filter_button_style">
      <ul className="button_style" id="bottom_space">
        <li className="small_font1">{name}</li>
        <button className="plus_button" onClick={() => setDisplay(p => !p)}>
          +
        </button>
      </ul>
      <div className="under_line">{display && filterKeyword}</div>
    </div>
  );
}

export default FilterButtons;
