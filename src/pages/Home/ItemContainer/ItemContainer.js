import './ItemContainer.scss';

export default function ItemContainer({ img, name, rate, price }) {
  return (
    <div className="item_container flex_center">
      <img src={img} alt={name} className="img" />
      <div className="name">{name}</div>
      <div className="rate">5 / {rate}</div>
      <div className="price">₩ {price}</div>
    </div>
  );
}
