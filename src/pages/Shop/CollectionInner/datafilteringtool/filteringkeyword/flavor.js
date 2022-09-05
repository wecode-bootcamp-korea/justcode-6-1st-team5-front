function Flavor(props) {
  const { mission } = props;

  const detailViewer = () => {
    mission(p => !p);
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
          <div className="margin_right">(갯수)</div>
        </button>
      </div>
    </div>
  );
}
export default Flavor;
