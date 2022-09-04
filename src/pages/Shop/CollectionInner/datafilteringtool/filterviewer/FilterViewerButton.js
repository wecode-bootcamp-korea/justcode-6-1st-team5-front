import { useState } from 'react';

function FilterViewerButton(props) {
  const { data } = props;
  const [x, setx] = useState(true);

  return (
    <div id="filterviwer_button">
      {x && (
        <li className="space_between">
          <button className="category_title">producttype: instore</button>
          <button className="x_type" onClick={() => setx(!true)}>
            x
          </button>
        </li>
      )}
    </div>
  );
}

export default FilterViewerButton;
