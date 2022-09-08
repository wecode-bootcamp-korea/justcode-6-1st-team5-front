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
  const navi = useNavigate();

  const { sortbutton } = props;

  // useEffect(() => {
  //   fetch('./mockdata/product.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setGoodsState(data.product);
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/product/${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setGoodsState(data);
        console.log(data);
      });
  }, [location.search]);

  //console.log('test', goodsState.length);
  const pagination = () => {
    navi(`?min=9&max=39`);
  };

  const pagination2 = () => {
    navi(`?min=40&max=70`);
  };

  const pagination3 = () => {
    navi(`?min=71&max=109`);
  };

  return (
    <div className="collection_inner">
      <FilterController
        goodsState={goodsState.length}
        setGoodsState={setGoodsState}
      />
      <div className="products_space">
        {props.sortbutton
          ? goodsState.map(f => {
              return (
                <div
                  onClick={() => {
                    navigate(`/product/detail/${f.id}`);
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
                    navigate(`/product/detail/${f.id}`);
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
            <div>{'<'}</div>
            <button onClick={pagination}>1</button>
            <button onClick={pagination2}>2</button>
            <button onClick={pagination3}>3</button>
            <div>{'>'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionInner;
