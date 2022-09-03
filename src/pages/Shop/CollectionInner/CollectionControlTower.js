import ProductList from './productlist/ProductList';
import BigProductList from './productlist/BigProductList';
import './collectioninner.scss';
import { useEffect, useState } from 'react';
import FilterButtonPart from './datafilteringtool/FilterButtonPart';
import Filterviewer from './datafilteringtool/filterkeywordviewer/Filterviewer';

function CollectionInner(props) {
  const [goodsstate, setgoodsstate] = useState([]); //데이터상태
  const [createFilterViewer, setcreateFilterViewer] = useState(false); //필터뷰어를 뜨게 한다.
  const [filterviewerarr, setFilterViewerArr] = useState([]);

  useEffect(() => {
    fetch('mockdata/product.json')
      .then(res => res.json())
      .then(data => {
        setgoodsstate(data.product);
      });
  }, []);
  return (
    <div className="collection_inner">
      <div className="custom_tool">
        <div className="filter_container">
          <div className="product_type">
            {createFilterViewer && (
              <Filterviewer
                filterarrstate={filterviewerarr}
                stopviewing={setcreateFilterViewer}
              />
            )}
            <FilterButtonPart
              filterarrstate={filterviewerarr}
              createfilterviewer={setcreateFilterViewer}
              buttonname={FIRSTNAME[0]}
              createfilterarr={setFilterViewerArr}
              goodsstate={goodsstate}
            />
            <FilterButtonPart
              filterarrstate={filterviewerarr}
              createfilterviewer={setcreateFilterViewer}
              buttonname={FIRSTNAME[1]}
              createfilterarr={setFilterViewerArr}
              goodsstate={goodsstate}
            />
            <FilterButtonPart
              filterarrstate={filterviewerarr}
              createfilterviewer={setcreateFilterViewer}
              buttonname={FIRSTNAME[2]}
              createfilterarr={setFilterViewerArr}
              goodsstate={goodsstate}
            />
          </div>
        </div>
        <div className="blankspace"></div>
      </div>
      <div className="products_space">
        {props.sortbutton
          ? goodsstate.map(f => {
              return (
                <div key={f.id} className="product_wrapper_wrapper">
                  <ProductList goodsdata={f} />
                </div>
              );
            })
          : goodsstate.map(f => {
              return (
                <div key={f.id} className="big_product_wrapper_wrapper">
                  <BigProductList goodsdata={f} />
                </div>
              );
            })}
      </div>
    </div>
  );
}

const FIRSTNAME = ['Producttype', 'Price', 'Flavor'];

export default CollectionInner;
