import { useEffect, useState } from 'react';

function Flavor() {
  const [offLineButton, setOffLineButton] = useState(false);
  const [goodsstate, setgoodsstate] = useState();

  useEffect(() => {
    fetch('mockdata/product.json')
      .then(res => res.json())
      .then(data => {
        setgoodsstate(data.product);
      });
  }, []);

  useEffect(() => {
    offLineButton && goodsstate.filter(d => d.salesmethod === 'offline');
  }, [setOffLineButton]);

  return (
    <div className="button_style">
      <div className="margin_right">Maccha</div>
      <div className="margin_right">(갯수)</div>
    </div>
  );
}
export default Flavor;
