function Flavor(props) {
  const { createfilterviewer, setFlavorFilterViewer } = props;
  const flavorfilterview = () => {
    createfilterviewer(true);
    setFlavorFilterViewer(p => !p);
  };

  return (
    <div id="flavor_filtering_category">
      <div className="button_style">
        <button
          onClick={() => {
            flavorfilterview();
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
