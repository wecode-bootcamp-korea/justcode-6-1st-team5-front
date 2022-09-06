import './filterviewerbutton.scss';

function FilterViewerButton(props) {
  const { name, way, setx, x } = props;

  return (
    <div id="filterviwer_button">
      {x && (
        <li className="space_between">
          {name === 'Price' ? (
            <button className="category_title">
              {name}:
              <span className="price_value">
                {way[0]} - {way[1]}
              </span>
            </button>
          ) : (
            <button className="category_title">
              {name}: <span id="bold">{way}</span>
            </button>
          )}
          <button className="x_type" onClick={() => setx(false)}>
            x
          </button>
        </li>
      )}
    </div>
  );
}

export default FilterViewerButton;
