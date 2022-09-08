import './filtercontroller.scss';
import FilterViewerButton from './FilterViewerButton';
import FilterButtons from './FilterButtons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FilterController(props) {
  const [productType, setProductType] = useState(false);
  const [productType2, setProductType2] = useState(false);
  const [price, setPrice] = useState(false);
  const [flavor, setFlavor] = useState(false);
  const [priceValue, setPriceValue] = useState([9, 106]);
  //const [url, setUrl] = useState('/shop');
  const { setGoodsState, goodsState, sortbutton } = props;
  const navi = useNavigate();

  const stopView = () => {
    sortbutton ? navi('/shop') : navi('?min=9&max=39'); //??왜 true일때 shop으로 안가지는지 이유파악
    setProductType(false);
    setProductType2(false);
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
                  way="In store Purchase"
                  setx={setProductType}
                  x={productType}
                />
              )}
              {productType2 && (
                <FilterViewerButton
                  name="ProductType"
                  way=" Ecommerce"
                  setx={setProductType2}
                  x={productType2}
                />
              )}
              {price && (
                <FilterViewerButton
                  name="Price"
                  way={priceValue}
                  setx={setPrice}
                  x={price}
                />
              )}
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
          <FilterButtons
            goodsState={goodsState}
            name="Producttype"
            mission1state={productType}
            mission2state={productType2}
            mission1={setProductType}
            mission2={setProductType2}
          />
          <FilterButtons
            setGoodsState={setGoodsState}
            name="Price"
            mission={setPrice}
            priceValue={priceValue}
            setPriceValue={setPriceValue}
          />
          <FilterButtons
            name="Flavor"
            mission={setFlavor}
            missionstate={flavor}
          />
        </div>
      </div>
      <div className="blank_space" />
    </div>
  );
}

export default FilterController;
