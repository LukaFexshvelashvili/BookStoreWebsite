import "./Text_Start.css";
export default function Text_Start(props: {
  cl?: string;
  head: string;
  desc: string;
}) {
  let animclass = "";
  if (props.cl != undefined) {
    animclass = "come4";
  } else {
    animclass = "";
  }
  return (
    <div className={`${props.cl} text_starter ${animclass}`}>
      <h3 className="t_head">{props.head}</h3>
      <h2 className="t_desc">{props.desc}</h2>
    </div>
  );
}
