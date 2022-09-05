import { Link, useNavigate } from 'react-router-dom';
import './Logo.scss';

export default function Logo({ fontSize }) {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <div
      className="logo"
      onClick={() => {
        navigate('/');
        scrollToTop();
      }}
      style={{ fontSize: fontSize }}
    >
      ROECY'
    </div>
  );
}
