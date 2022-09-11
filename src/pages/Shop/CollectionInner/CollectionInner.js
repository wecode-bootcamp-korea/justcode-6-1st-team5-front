import ProductList from './productlist/ProductList';
import BigProductList from './productlist/BigProductList';
import './collectioninner.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import FilterController from './datafilteringtool/filterviewer/filterController';
// import ProductType from './datafilteringtool/filteringkeyword/productType';

function CollectionInner(props) {
  const [goodsState, setGoodsState] = useState([]); //데이터상태
  const [url, seturl] = useState([]);
  // const [productType1, setproductType1] = useState();

  const location = useLocation();
  const navi = useNavigate();
  const params = useParams();
  const pageid = params.id;

  const { sortbutton } = props;
  //const [url, seturl] = useEffect([]);

  //const newurl = {ecommerce : 'producttype:ecommerce'}
  //url.join('&') >> url 처리

  // useEffect(() => {
  //   fetch('./mockdata/product.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setGoodsState(data.product);
  //       console.log(data);
  //     });
  // }, []);
  // >>>>>>>>>>>Mock-up 데이터

  useEffect(() => {
    fetch(`http://localhost:8000/shop/${pageid}${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setGoodsState(data);
        console.log(data);
      });
  }, [location.search, pageid]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [location.search, pageid]);

  //console.log('test', goodsState.length);
  const pagination = () => {
    navi(`/shop/1`);
  };

  const pagination2 = () => {
    navi(`/shop/2`);
  };

  const pagination3 = () => {
    navi(`/shop/3`);
  };

  return (
    <div className="collection_inner">
      <FilterController
        goodsState={goodsState.length}
        setGoodsState={setGoodsState}
      />
      <div className="products_space">
        {sortbutton
          ? goodsState.map(f => {
              return (
                <div key={f.id} className="product_wrapper_wrapper">
                  <ProductList goodsdata={f} id={f.id} />
                </div>
              );
            })
          : goodsState.map(f => {
              return (
                <div key={f.id} className="big_product_wrapper_wrapper">
                  <BigProductList goodsdata={f} id={f.id} />
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
