import './bigproductlist.scss';

function BigProductList({ goodsdata }) {
  return (
    <div className="big_product_wrapper">
      <div className="big_product">
        <div id="big_goods_img_wrapper">
          <img id="big_goods_img" src={goodsdata.imageurl} alt="big_goods" />
        </div>
        <div className="big_product_name" alt="big_goods">
          {goodsdata.productname}
        </div>
        <div className="big_star">
          <img
            className="big_star_img"
            src={goodsdata.starurl}
            alt="big_star"
          />
          <img
            className="big_star_img"
            src={goodsdata.starurl}
            alt="big_star"
          />
          <img
            className="big_star_img"
            src={goodsdata.starurl}
            alt="big_star"
          />
          <img
            className="big_star_img"
            src={goodsdata.starurl}
            alt="big_star"
          />
          <img
            className="big_star_img"
            src={goodsdata.starurl}
            alt="big_star"
          />
        </div>
        <div className="big_price">{goodsdata.price}</div>
      </div>
    </div>
  );
}

export default BigProductList;
