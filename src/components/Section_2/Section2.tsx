import "./Section2.css";
import { useEffect } from "react";
import { M_ScrollDelay, M_Random, M_Scroll } from "../../js/ModernScroll";
import Text_Start from "../Text_Start";

import bg1 from "../../images/users/bg1.png";
import bg2 from "../../images/users/bg2.png";
import bg3 from "../../images/users/bg3.png";
import Card from "../comp/Card";

export default function Section2() {
  let r1 = M_Random();
  useEffect(() => {
    M_ScrollDelay(".card_row_s2", ".card_s2", 100, 100, "come4");
    M_Scroll(`.info_block`, `.${r1}`, 100, "come4");
  }, []);

  return (
    <div className="Section2">
      <Text_Start
        cl={r1}
        head="Our Tracks"
        desc="Lorem Ipsum is simply dummy text of the printing."
      />
      <div className="container">
        <div className="card_row_s2">
          <Card
            image={bg1}
            proffesion="UI/UX Design"
            head="UI/UX Design for Beginners"
            price="$98"
            time="22hr 30min"
            courses="34 Courses"
            sales="250 Sales"
          />
          <Card
            image={bg2}
            proffesion="UI/UX Design"
            head="UI/UX Design for Beginners"
            price="$98"
            time="22hr 30min"
            courses="34 Courses"
            sales="250 Sales"
          />
          <Card
            image={bg3}
            proffesion="UI/UX Design"
            head="UI/UX Design for Beginners"
            price="$98"
            time="22hr 30min"
            courses="34 Courses"
            sales="250 Sales"
          />
        </div>
      </div>
    </div>
  );
}
