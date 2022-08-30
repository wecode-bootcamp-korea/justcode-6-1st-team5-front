import './Part.scss';

export default function Part({ pic, type, text1, text2 }) {
  return (
    <div className="home_part">
      {type === 'left' && <img src={pic} alt="chocolate" className="img" />}
      <div className="text_container flex_center">
        <div className="text_1">{text1}</div>
        <div className="text_2">{text2}</div>
        <div className="text_btn flex_center">구매하기</div>
      </div>
      {type === 'right' && <img src={pic} alt="chocolate" className="img" />}
    </div>
  );
}
