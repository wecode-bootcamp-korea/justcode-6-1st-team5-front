import './bigproductlist.scss';

function ProductList({ goodsdata }) {
  return (
    <div className="big_productwrapper">
      <div className="big_product">
        <div id="big_goodsimgwrapper">
          <img id="big_goodsimg" src={goodsdata.imageurl} alt="big_goods" />
        </div>
        <div className="big_productname" alt="big_goods">
          {goodsdata.productname}
        </div>
        <div className="big_star">
          <img className="big_starimg" src={goodsdata.starurl} alt="big_star" />
          <img className="big_starimg" src={goodsdata.starurl} alt="big_star" />
          <img className="big_starimg" src={goodsdata.starurl} alt="big_star" />
          <img className="big_starimg" src={goodsdata.starurl} alt="big_star" />
          <img className="big_starimg" src={goodsdata.starurl} alt="big_star" />
        </div>
        <div className="big_price">{goodsdata.price}</div>
      </div>
    </div>
  );
}

export default ProductList;
