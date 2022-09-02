import './productlist.scss';

function ProductList({ goodsdata }) {
  return (
    <div className="productwrapper">
      <div className="product">
        <div id="goodsimgwrapper">
          <img id="goodsimg" src={goodsdata.imageurl} />
        </div>
        <div className="productname">{goodsdata.productname}</div>
        <div className="star">
          <img className="starimg" src={goodsdata.starurl} />
          <img className="starimg" src={goodsdata.starurl} />
          <img className="starimg" src={goodsdata.starurl} />
          <img className="starimg" src={goodsdata.starurl} />
          <img className="starimg" src={goodsdata.starurl} />
        </div>
        <div id="producttprice">{goodsdata.price}</div>
      </div>
    </div>
  );
}

export default ProductList;
