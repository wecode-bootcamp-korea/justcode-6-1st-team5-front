import './sortselector.scss';
import { useNavigate } from 'react-router-dom';

function Sortselector() {
  const navi = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:8000/product/${location.search}`, {
  //     method: 'GET',
  //     body: {
  //       sort: 'lowestprice',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setGoodsState(data);
  //     });
  // }, [sortstate]);

  //
  //
  //
  //
  //

  return (
    <div id="sortselector_shadow">
      <div id="row_reverse">
        {' '}
        <div id="triangle"></div>
      </div>
      <ul id="sort_selector">
        <li>
          <button
            className="sortbutton"
            onClick={() => navi(`?sort=bestselling`)}
          >
            BEST SELLING
          </button>
        </li>
        <li>
          <button
            className="sortbutton"
            onClick={() => navi(`?sort=lowestprice`)}
          >
            LOWEST PRICE
          </button>
        </li>
        <li>
          <button
            className="sortbutton"
            onClick={() => navi(`?sort=highestprice`)}
          >
            HIGHEST PRICE
          </button>
        </li>
        <li>
          <button className="sortbutton" onClick={() => navi('?sort=newtoold')}>
            DATE, NEW TO OLD
          </button>
        </li>
        <li>
          <button className="sortbutton" onClick={() => navi('?sort=oldtonew')}>
            DATE, OLD TO NEW
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sortselector;
