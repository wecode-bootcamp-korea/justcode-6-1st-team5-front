import './productlist.scss';

function ProductList({ goodsdata }) {
  return (
    <div className="product_wrapper">
      <div className="product">
        <div id="goods_img_wrapper">
          <img id="goods_img" src={goodsdata.imageurl} />
        </div>
        <div className="product_name">{goodsdata.productname}</div>
        <div className="star">
          <img className="star_img" src={goodsdata.starurl} />
          <img className="star_img" src={goodsdata.starurl} />
          <img className="star_img" src={goodsdata.starurl} />
          <img className="star_img" src={goodsdata.starurl} />
          <img className="star_img" src={goodsdata.starurl} />
        </div>
        <div id="product_price">{goodsdata.price}</div>
      </div>
    </div>
  );
}

export default ProductList;
