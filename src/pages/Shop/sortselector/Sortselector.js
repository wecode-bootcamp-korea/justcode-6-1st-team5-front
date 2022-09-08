import './sortselector.scss';

function Sortselector(props) {
  const { setGoodsState } = props;

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

  return (
    <div id="sortselector_shadow">
      <div id="row_reverse">
        {' '}
        <div id="triangle"></div>
      </div>
      <ul id="sort_selector">
        <li>
          <button className="sortbutton">BEST SELLING</button>
        </li>
        <li>
          <button className="sortbutton">LOWEST PRICE</button>
        </li>
        <li>
          <button className="sortbutton">HIGHEST PRICE</button>
        </li>
        <li>
          <button className="sortbutton">DATE, NEW TO OLD</button>
        </li>
        <li>
          <button className="sortbutton">DATE, OLD TO NEW</button>
        </li>
      </ul>
    </div>
  );
}

export default Sortselector;
