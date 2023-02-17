export default function PartRule(props: {
  image: string;
  head: string;
  desc: string;
}) {
  return (
    <div className="partrule come2">
      <div className="imagerule">
        <img src={props.image} />
      </div>
      <div className="textrules">
        <div className="st">{props.head}</div>
        <div className="ds">{props.desc}</div>
      </div>
    </div>
  );
}
