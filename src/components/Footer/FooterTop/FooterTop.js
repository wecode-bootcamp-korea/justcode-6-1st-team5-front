import './FooterTop.scss';

function FooterTop() {
  return (
    <div className="top_container flex_center">
      <div className="top_box flex_center">
        <img src="./Images/truck.png" alt="truck" className="icon" />
        <p className="text">
          130,000원 이상 구매시
          <br /> 국내 어디든 무료배송
        </p>
      </div>
      <div className="top_box flex_center">
        <img src="./Images/snow.png" alt="snowflake" className="icon" />
        <p className="text">
          초콜릿은 아이스박스에 담긴 채
          <br /> 냉동 상태로 안전하게 배송
        </p>
      </div>
      <div className="top_box flex_center">
        <img src="./Images/shop.png" alt="snowflake" className="icon" />
        <p className="text">
          일부 매장에서
          <br /> 당일 배속 및 픽업 서비스 제공
        </p>
      </div>
      <div className="top_box flex_center">
        <img src="./Images/security.png" alt="snowflake" className="icon" />
        <p className="text">
          100% 안전한 체크아웃으로
          <br /> 걱정 없는 구매
        </p>
      </div>
    </div>
  );
}

export default FooterTop;
