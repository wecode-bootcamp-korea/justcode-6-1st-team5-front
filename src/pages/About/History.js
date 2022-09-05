import './history.scss';

export default function History(props) {
  const { year, intro, name, img } = props;
  return (
    <div className="history">
      <div className="year">
        <h2>{year}</h2>
      </div>
      {name === 'right' ? (
        <div className="img_right">
          {name !== 'last' && <img className="choc_img" src={img} />}
        </div>
      ) : (
        <div className="img_left">
          {name !== 'last' && <img className="choc_img" src={img} />}
        </div>
      )}
      <div className="legend">{intro}</div>
      {name !== 'last' && (
        <div>
          <div className="dot">
            <div className="timeline_circle"></div>
          </div>
          <div className="dot">
            <div className="timeline_circle"></div>
          </div>
          <div className="dot">
            <div className="timeline_circle"></div>
          </div>
          <div className="dot">
            <div className="timeline_circle"></div>
          </div>
          <div className="dot">
            <div className="timeline_circle"></div>
          </div>
        </div>
      )}
    </div>
  );
}
