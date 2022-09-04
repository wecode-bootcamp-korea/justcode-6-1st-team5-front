import './filtercontroller.scss';
import FilterViewerButton from './FilterViewerButton';
import FilterButtons from './FilterButtons';

function FilterController(props) {
  const { setstopview } = props;
  return (
    <div className="custom_tool">
      <div className="filter_container">
        <div className="product_type">
          <div id="filter_viewer_mum">
            <div className="space_between">
              <span id="main_category_title">Refine By</span>
              <button id="clear_all" onClick={() => setstopview(false)}>
                Clear All
              </button>
            </div>
            <ul>
              <FilterViewerButton />
              <FilterViewerButton />
              <FilterViewerButton />
            </ul>
          </div>
          <FilterButtons name="Producttype" />
          <FilterButtons name="Price" />
          <FilterButtons name="Flavor" />
        </div>
      </div>
      <div className="blankspace" />
    </div>
  );
}

export default FilterController;
