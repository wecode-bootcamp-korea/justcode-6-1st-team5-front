import { useState } from 'react';

function Filterviewerbutton(props) {
  const [x, setx] = useState(true);

  return (
    <div>
      {x && (
        <li className="space_between">
          <button className="category_title">{props.filtername}</button>
          <button className="x_type" onClick={() => setx(!true)}>
            x
          </button>
        </li>
      )}
    </div>
  );
}

export default Filterviewerbutton;
