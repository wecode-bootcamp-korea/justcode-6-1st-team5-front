import './bigproductlist.css';

function ProductList({ goodsdata }) {
  return (
    <div className="big_productwrapper">
      <div className="big_product">
        <div id="big_goodsimgwrapper">
          <img id="big_goodsimg" src={goodsdata.imageurl} />
        </div>
        <div className="big_productname">{goodsdata.productname}</div>
        <div className="big_star">
          <img className="big_starimg" src={goodsdata.starurl} />
          <img className="big_starimg" src={goodsdata.starurl} />
          <img className="big_starimg" src={goodsdata.starurl} />
          <img className="big_starimg" src={goodsdata.starurl} />
          <img className="big_starimg" src={goodsdata.starurl} />
        </div>
        <div className="big_price">{goodsdata.price}</div>
      </div>
    </div>
  );
}

export default ProductList;
