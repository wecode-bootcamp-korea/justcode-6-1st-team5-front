function Flavor(props) {
  const { mission } = props;

  const detailviewer = () => {
    mission(p => !p);
  };

  return (
    <div id="flavor_filtering_category">
      <div className="button_style">
        <button
          onClick={() => {
            detailviewer();
          }}
        >
          <div className="margin_right">Maccha</div>
          <div className="margin_right">(갯수)</div>
        </button>
      </div>
    </div>
  );
}
export default Flavor;
