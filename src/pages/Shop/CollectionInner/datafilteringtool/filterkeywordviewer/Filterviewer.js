import './filterviewer.scss';
import Filterviewerbutton from './Filterviewerbutton';
import { useState } from 'react';
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
          <Filterviewerbutton filtername={FILTERINFOR[0]} />
          <Filterviewerbutton filtername={FILTERINFOR[1]} />
          <Filterviewerbutton filtername={FILTERINFOR[2]} />
        </div>
      </ul>
    </div>
  );
}

const FILTERINFOR = [
  'Product Type: In Store purchase',
  'flavor:Maccha',
  'price:0-97',
];
export default Filterviewer;
