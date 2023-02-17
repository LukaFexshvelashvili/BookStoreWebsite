import "./in_section.css";
import {
  M_ScrollDelay,
  M_Random,
  M_Scroll,
  ML_Scroll,
} from "../../../js/ModernScroll";
import Text_Start from "../../Text_Start";
import { useEffect } from "react";
import emp1 from "../../../images/users/emp1.png";
import emp2 from "../../../images/users/emp2.png";
import emp3 from "../../../images/users/emp3.png";

import soc1 from "../../../images/icons/soc1.png";
import soc2 from "../../../images/icons/soc2.png";

import newsletter from "../../../images/background/newsletter.png";

import E_Card from "../E_Card";

export default function In_Section() {
  let r3 = M_Random();
  useEffect(() => {
    M_Scroll(`.In_Section`, `.${r3}`, 100, "come4");
    ML_Scroll(`.newsletter`, `.newsletter`, 100, "come4");
    M_ScrollDelay(`.In_Section`, `.e_card`, 200, 200, "come4");
  }, []);

  return (
    <div className="In_Section">
      <Text_Start
        cl={r3}
        head="Our Agents"
        desc="Lorem Ipsum is simply dummy text of the printing."
      />
      <div className="e_row">
        <E_Card
          image={emp1}
          name="Matthew E. McNatt"
          prof="Professor @George Brown College"
          desc="Ut enim ad minim veniam, quis nost exercitation
          ullamco laboris nisi ut allquip ex commodo."
          rank="Engineering physics"
          soc1={soc1}
          soc2={soc2}
        />

        <E_Card
          image={emp2}
          name="Tracy D. Wright"
          prof="Professor @George Brown College"
          desc="Ut enim ad minim veniam, quis nost exercitation
        ullamco laboris nisi ut allquip ex commodo."
          rank="Engineering physics"
          soc1={soc1}
          soc2={soc2}
        />

        <E_Card
          image={emp3}
          name="Cynthia A. Nelson"
          prof="Professor @George Brown College"
          desc="Ut enim ad minim veniam, quis nost exercitation
      ullamco laboris nisi ut allquip ex commodo."
          rank="Engineering physics"
          soc1={soc1}
          soc2={soc2}
        />
      </div>
      <div className="newsletter come4">
        <p className="st">Subscribe to our newsletter</p>
        <div className="dt">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
        <div className="search">
          <input type="text" placeholder="Email Address" />
          <button>send</button>
        </div>
      </div>
    </div>
  );
}
