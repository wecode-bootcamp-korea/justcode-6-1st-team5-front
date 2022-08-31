import './ItemContainer.scss';
import { useNavigate } from 'react-router-dom';

export default function ItemContainer({ id, img, name, rate, price }) {
  const navigate = useNavigate();
  return (
    <div className="items_container">
      <div
        className="item_container flex_center"
        onClick={() => navigate(`/collections/all-products/${id}`)}
      >
        <img src={img} alt={name} className="img" />
        <div className="name">{name}</div>
        <div className="rate">{rate} / 5</div>
        <div className="price">₩ {price}</div>
      </div>
    </div>
  );
}
