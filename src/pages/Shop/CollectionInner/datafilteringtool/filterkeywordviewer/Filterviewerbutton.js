import { useState } from 'react';

function Filterviewerbutton(props) {
  const { title, value } = props;
  const [x, setx] = useState(true);
  return (
    <div>
      {x && (
        <li className="space_between">
          <button className="category_title">
            {title}:{value}
          </button>
          <button className="x_type" onClick={() => setx(!true)}>
            x
          </button>
        </li>
      )}
    </div>
  );
}

export default Filterviewerbutton;
