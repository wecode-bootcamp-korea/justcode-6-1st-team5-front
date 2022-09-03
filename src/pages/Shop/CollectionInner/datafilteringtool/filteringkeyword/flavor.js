function Flavor(props) {
  const { createfilterviewer, createfilterarr, filterarrstate } = props;
  const productfilterview = () => {
    createfilterviewer(true);
  };
  const detailviewer = () => {
    const filterinfor = {
      title: 'Flavor',
      value: ' Maccha',
    };
    createfilterarr([...filterarrstate, filterinfor]);
  };
  return (
    <div id="flavor_filtering_category">
      <div className="button_style">
        <button
          onClick={() => {
            productfilterview();
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
