import ProductList from './productlist/ProductList';
import BigProductList from './productlist/BigProductList';
import './collectioninner.scss';
import { useEffect, useState } from 'react';
import FilterController from './datafilteringtool/filterviewer/filterController';

function CollectionInner(props) {
  const [goodsstate, setgoodsstate] = useState([]); //데이터상태
  const [stopview, setstopview] = useState(true);

  useEffect(() => {
    fetch('mockdata/product.json')
      .then(res => res.json())
      .then(data => {
        setgoodsstate(data.product);
      });
  }, []);

  return (
    <div className="collection_inner">
      {stopview && <FilterController setstopview={setstopview} />}
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

export default CollectionInner;
