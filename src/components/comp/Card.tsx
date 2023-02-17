import lit1 from "../../images/icons/lit1.png";
import lit2 from "../../images/icons/lit2.png";
import lit3 from "../../images/icons/lit3.png";

import star from "../../images/icons/star.png";
import star_untill from "../../images/icons/star_untill.png";

export default function Card(props: {
  image: string;
  proffesion: string;
  head: string;
  price: string;
  time: string;
  courses: string;
  sales: string;
}) {
  return (
    <div className="card_s2 come4">
      <div className="card_s2_img">
        <img src={props.image} alt="" />
      </div>
      <div className="card_s2_info">
        <div className="starter">
          <p>{props.proffesion}</p>
          <div className="star_row">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star_untill} />
          </div>
        </div>
        <p className="namer">{props.head}</p>
        <p className="pricer">{props.price}</p>
        <hr />
        <div className="card_stats">
          <div className="card_stat">
            <img src={lit1} />
            <p>{props.time}</p>
          </div>
          <div className="card_stat">
            <img src={lit2} />
            <p>{props.courses}</p>
          </div>
          <div className="card_stat">
            <img src={lit3} />
            <p>{props.sales}</p>
          </div>
        </div>
      </div>
      <button>Join Course</button>
    </div>
  );
}
