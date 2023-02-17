export default function ProfBlock(props: {
  desc: string;
  image: string;
  name: string;
  prof: string;
}) {
  return (
    <div className="i_profile come4">
      <div className="textfield">{props.desc}</div>
      <div className="userfield">
        <div className="i_image">
          <img src={props.image} />
        </div>
        <div className="i_prof">
          <p className="name">{props.name}</p>
          <p className="prof">{props.prof}</p>
        </div>
      </div>
    </div>
  );
}
