import { useNavigate } from 'react-router-dom';

function Flavor(props) {
  const { mission, missionstate } = props;
  const navi = useNavigate();
  const detailViewer = () => {
    mission(p => !p);
    missionstate ? navi('/shop') : navi('?flavor=maccha');
  };

  return (
    <div id="flavor_filtering_category">
      <div className="button_style">
        <button
          onClick={() => {
            detailViewer();
          }}
        >
          <div className="margin_right">Maccha</div>
          <div className="margin_right">()</div>
        </button>
      </div>
    </div>
  );
}
export default Flavor;
