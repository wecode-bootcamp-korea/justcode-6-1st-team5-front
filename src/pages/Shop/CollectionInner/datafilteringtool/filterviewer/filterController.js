import './filtercontroller.scss';
import FilterViewerButton from './FilterViewerButton';
import FilterButtons from './FilterButtons';
import { useState } from 'react';

function FilterController() {
  const [productType, setProductType] = useState(false);
  const [price, setPrice] = useState(false);
  const [flavor, setFlavor] = useState(false);

  const stopView = () => {
    setProductType(false);
    setPrice(false);
    setFlavor(false);
  };

  return (
    <div className="custom_tool">
      <div className="filter_container">
        <div className="product_type">
          <div id="filter_viewer_mum">
            <div className="space_between">
              <span id="main_category_title">Refine By</span>
              <button id="clear_all" onClick={stopView}>
                Clear All
              </button>
            </div>
            <ul>
              {productType && (
                <FilterViewerButton
                  name="ProductType"
                  way="Instore Purchase"
                  setx={setProductType}
                  x={productType}
                />
              )}
              {price && <FilterViewerButton name="Price" way="90" />}
              {flavor && (
                <FilterViewerButton
                  name="Flavor"
                  way="Maccha"
                  setx={setFlavor}
                  x={flavor}
                />
              )}
            </ul>
          </div>
          <FilterButtons name="Producttype" mission={setProductType} />
          <FilterButtons name="Price" mission={setPrice} />
          <FilterButtons name="Flavor" mission={setFlavor} />
        </div>
      </div>
      <div className="blankspace" />
    </div>
  );
}

export default FilterController;
