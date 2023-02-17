import "./Section1.css";
import backimage from "../../images/background/bg1.png";
import search_icon from "../../images/icons/search.png";
import { useEffect } from "react";
import { M_ScrollLoad, M_LoadDelay } from "../../js/ModernScroll";

import logo1 from "../../images/icons/logo1.png";
import logo2 from "../../images/icons/logo2.png";
import logo3 from "../../images/icons/logo3.png";

export default function Section1() {
  useEffect(() => {
    M_ScrollLoad(".texter", 100, "come1");
    M_ScrollLoad(".imager", 200, "come2");

    M_ScrollLoad(".info_block", 200, "come4");
    M_LoadDelay(".sider", 200, 400, "come4");
  }, []);

  return (
    <>
      <div className="Section1">
        <div className="container section_splitter">
          <div className="texter come1">
            <p className="head">
              The <span>Smart</span> Choice For <span>Future</span>
            </p>
            <p className="desc">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>
            <div className="search">
              <img src={search_icon} alt="workmage" />
              <input type="text" placeholder="Search for a location..." />
              <button>Continue</button>
            </div>
          </div>
          <div className="imager come2">
            <img src={backimage} alt="workmage" />
          </div>
        </div>
      </div>
      <div className="info_center">
        <div className="info_block come4">
          <div className="triplet">
            <div className="sider come4">
              <div className="logoside">
                <img src={logo1} alt="" />
              </div>
              <div className="textside">
                <p className="head">Learn The Latest Skills</p>
                <p className="desc">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className="sider come4">
              <div className="logoside">
                <img src={logo2} alt="" />
              </div>
              <div className="textside">
                <p className="head">Get Ready For a Career</p>
                <p className="desc">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>

            <div className="sider come4">
              <div className="logoside">
                <img src={logo3} alt="" />
              </div>
              <div className="textside">
                <p className="head">Earn a Certificate</p>
                <p className="desc">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
