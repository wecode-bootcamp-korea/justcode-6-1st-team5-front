import { useNavigate } from 'react-router-dom';
import './MenuList.scss';

export default function MenuList({ title, menu }) {
  const navigate = useNavigate();
  const menuData = menu.map(el => {
    return (
      <div onClick={() => navigate(el.url)} className="menu">
        {el.name}
      </div>
    );
  });

  return (
    <div className="wrapper flex_center">
      <div className="title">{title}</div>
      {menuData}
    </div>
  );
}
