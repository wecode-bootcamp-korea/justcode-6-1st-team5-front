import ProductList from './productlist/ProductList';
import BigProductList from './productlist/BigProductList';
import './collectioninner.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FilterController from './datafilteringtool/filterviewer/filterController';

function CollectionInner(props) {
  const [goodsState, setGoodsState] = useState([]); //데이터상태
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   fetch('./mockdata/product.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setGoodsState(data);
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/product/${location.search}`)
      .then(res => res.json())
      .then(data => {
        setGoodsState(data);
        console.log(data);
      });
  }, [location.search]);

  return (
    <div className="collection_inner">
      <FilterController setGoodsState={setGoodsState} />
      <div className="products_space">
        {props.sortbutton
          ? goodsState.map(f => {
              return (
                <div
                  onClick={() => {
                    navigate(`/detail/${f.id}`);
                  }}
                  key={f.id}
                  className="product_wrapper_wrapper"
                >
                  <ProductList goodsdata={f} />
                </div>
              );
            })
          : goodsState.map(f => {
              return (
                <div
                  onClick={() => {
                    navigate(`/detail/${f.id}`);
                  }}
                  key={f.id}
                  className="big_product_wrapper_wrapper"
                >
                  <BigProductList goodsdata={f} />
                </div>
              );
            })}
        <div className="page_wrapper">
          <div className="page">
            <button>{'<'}</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionInner;
