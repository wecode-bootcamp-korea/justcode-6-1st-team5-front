import ProductList from './productlist/ProductList';
import BigProductList from './productlist/BigProductList';
import './collectioninner.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FilterController from './datafilteringtool/filterviewer/filterController';

function CollectionInner(props) {
  const [goodsState, setGoodsState] = useState([]); //데이터상태

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
  // >>>>>>>>>>>Mock-up 데이터

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

  // const basic = {
  //   width: '18vw',
  //   height: '18vw',
  //   backgroundSize: 'cover',
  //   backgroundImage: 'url(' + img + ')',
  // };

  // const hovered = {
  //   width: '18vw',
  //   height: '18vw',
  //   backgroundSize: '120%',
  //   backgroundPosition: '50% 50%',
  //   backgroundImage:
  //     'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' +
  //     img +
  //     ')',
  // };

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
                <div key={f.id} className="big_product_wrapper_wrapper">
                  <BigProductList goodsdata={f} id={f.id} />
                </div>
              );
            })
          : goodsState.map(f => {
              return (
                <div key={f.id} className="product_wrapper_wrapper">
                  <ProductList goodsdata={f} id={f.id} />
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
