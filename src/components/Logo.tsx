import weblogo from "../images/icons/Group.png";
import "./Logo.css";

export default function logo() {
  return (
    <div className="logo">
      <img src={weblogo} alt="logo" className="logo_img" />
      <p className="logo_text">Book Store</p>
    </div>
  );
}
