import "./Section3.css";

import backimage2 from "../../images/background/bg2.png";

import ruleic1 from "../../images/icons/ruleic1.png";
import ruleic2 from "../../images/icons/ruleic2.png";

import PartRule from "../comp/PartRule";
import { useEffect } from "react";

import { M_ScrollDelay, M_Random, M_Scroll } from "../../js/ModernScroll";

export default function Section3() {
  useEffect(() => {
    M_Scroll(".Section3", ".imager3", 100, "come0");
    M_Scroll(".Section3", ".head3", 100, "come0");
    M_ScrollDelay(".Section3", ".partrule", 200, 200, "come2");
  }, []);
  return (
    <>
      <div className="Section3">
        <div className="container section_splitter3">
          <div className="imager3 come0">
            <img src={backimage2} alt="workmage" />
          </div>

          <div className="texter3">
            <p className="head3 come0">
              Premium <span>Learning</span> Experience
            </p>
            <PartRule
              image={ruleic1}
              head="Easily Accessible"
              desc="Learning Will fell Very Comfortable With Courslab."
            />
            <PartRule
              image={ruleic2}
              head="Fun learning expe"
              desc="Learning Will fell Very Comfortable With Courslab."
            />
          </div>
        </div>
      </div>
    </>
  );
}
