import './filterviewer.scss';
import Filterviewerbutton from './Filterviewerbutton';

function Filterviewer(props) {
  return (
    <div id="filter_viewer_mum">
      <div className="space_between">
        <span id="main_category_title">Refine By</span>
        <button id="clear_all" onClick={() => props.stopviewing(false)}>
          Clear All
        </button>
      </div>
      <ul>
        <div>
          {props.filterarrstate.map(obj => {
            return (
              <Filterviewerbutton
                key={obj.id}
                title={obj.title}
                value={obj.value}
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
}

export default Filterviewer;
