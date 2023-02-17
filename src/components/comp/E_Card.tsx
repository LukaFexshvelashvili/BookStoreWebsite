export default function E_Card(props: {
  image: string;
  name: string;
  prof: string;
  desc: string;
  rank: string;
  soc1: string;
  soc2: string;
}) {
  return (
    <div className="e_card come4">
      <div className="e_image">
        <img src={props.image} />
      </div>
      <div className="e_info">
        <p className="nm">{props.name}</p>
        <p className="dm">{props.prof}</p>
        <p className="dd">{props.desc}</p>
        <div className="e_last">
          <p className="e_or">{props.rank}</p>
          <div className="e_logos">
            <div className="e_logo">
              <img src={props.soc1} />
            </div>
            <div className="e_logo">
              <img src={props.soc2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
