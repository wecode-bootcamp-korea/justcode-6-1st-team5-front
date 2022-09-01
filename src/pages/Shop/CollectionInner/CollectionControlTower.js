import ProductList from './productlist/ProductList';
import BigProductList from './productlist/BigProductList';
import './collectioninner.css';
import { useEffect, useState } from 'react';
import FilterButtonPart from './datafilteringtool/FilterButtonPart';

function CollectionInner(props) {
  const [goodsstate, setgoodsstate] = useState([]);

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
            <FilterButtonPart
              buttonname={FIRSTNAME[0]}
              goodsstate={goodsstate}
            />
            <FilterButtonPart
              buttonname={FIRSTNAME[1]}
              goodsstate={goodsstate}
            />
            <FilterButtonPart
              buttonname={FIRSTNAME[2]}
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

const FIRSTNAME = ['producttype', 'price', 'flavor'];

export default CollectionInner;
