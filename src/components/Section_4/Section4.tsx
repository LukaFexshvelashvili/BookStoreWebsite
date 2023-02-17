import "./Section4.css";
import { M_ScrollDelay, M_Random, M_Scroll } from "../../js/ModernScroll";
import { useEffect } from "react";
import Text_Start from "../Text_Start";

import us1 from "../../images/users/user1.png";
import us2 from "../../images/users/user2.png";
import us3 from "../../images/users/user3.png";
import ProfBlock from "../comp/ProfBlock";
import In_Section from "../comp/in_section/In_Section";

export default function Section4() {
  let r1 = M_Random();
  useEffect(() => {
    M_Scroll(`.Section4`, `.${r1}`, 100, "come4");
    M_ScrollDelay(".Section4", ".i_profile", 200, 200, "come4");
    M_ScrollDelay(".Section4", ".roller", 200, 100, "come4");
  }, []);
  return (
    <>
      <div className="Section4">
        <Text_Start
          cl={r1}
          head="What student’s say"
          desc="Lorem Ipsum is simply dummy text of the printing."
        />
        <div className="profile_rows">
          <ProfBlock
            image={us1}
            desc="“Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself”"
            name="Finlay Kirk"
            prof="Web Developer"
          />
          <ProfBlock
            image={us2}
            desc="“Complete account of the system and
            expound the actual Contrary to popular
            belief, Lorem Ipsum is not simply 
            random text. It has roots”"
            name="Dannette P. Cervantes"
            prof="Web Design"
          />
          <ProfBlock
            image={us3}
            desc="“There are many variations of passages
            of Lorem Ipsum available, but the majority
            have suffered alteration in some form,
            by injected humour”"
            name="Clara R. Altman"
            prof="UI/UX Design"
          />
        </div>
        <div className="roller_row">
          <div className="roller come4"></div>
          <div className="roller come4"></div>
          <div className="roller come4"></div>
          <div className="roller come4"></div>
          <div className="roller come4"></div>
        </div>
        <In_Section />
      </div>
    </>
  );
}
