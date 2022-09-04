import './sortselector.scss';

function Sortselector() {
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
          <button className="sortbutton">FEATURED</button>
        </li>
        <li>
          <button className="sortbutton">LOWEST PRICE</button>
        </li>
        <li>
          <button className="sortbutton">HIGHEST PRICE</button>
        </li>
        <li>
          <button className="sortbutton">ALPHABETICALLY, A-Z</button>
        </li>
        <li>
          <button className="sortbutton">ALPHABETICALLY, Z-A</button>
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
