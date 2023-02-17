import "./Footer.css";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer>
      <div className="container footer_rows">
        <div className="footer_row lgcol">
          <div className="f_column col_start">
            <Logo />
          </div>
          <div className="f_column col_desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </div>
        </div>
        <div className="footer_row">
          <div className="f_column col_start">Company</div>
          <div className="f_column">About Us</div>
          <div className="f_column">How to work?</div>
          <div className="f_column">Populer Course</div>
          <div className="f_column">Service</div>
        </div>
        <div className="footer_row">
          <div className="f_column col_start">Courses</div>
          <div className="f_column">Categories</div>
          <div className="f_column">Offline Course</div>
          <div className="f_column">Vidio Course</div>
        </div>
        <div className="footer_row">
          <div className="f_column col_start">Support</div>
          <div className="f_column">FAQ</div>
          <div className="f_column">Help Center</div>
          <div className="f_column">Career</div>
          <div className="f_column">Privacy</div>
        </div>
        <div className="footer_row">
          <div className="f_column col_start">Contac Info</div>
          <div className="f_column">+0913-705-3875</div>
          <div className="f_column">ElizabethJ@jourrapide.com</div>
          <div className="f_column">
            4808 Skinner Hollow Road Days Creek, OR 97429
          </div>
        </div>
      </div>
      <div className="lined"></div>
      <p className="end_text">BookStore All Right Reserved, 2022</p>
    </footer>
  );
}
