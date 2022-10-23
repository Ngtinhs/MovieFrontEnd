import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import Logo from '../../img/LOGONEW.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={Logo}
            alt=""
          />
          <Link to="/" className="link">
            <span>Trang chủ</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Phim truyền hình</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Phim</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Tìm kiếm</span>
       
          <div className="profile">
          <img
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fs_dAdMkYAIAX9DRJ-p&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9Ii7DlC7hEhI-gcDJrERc7LOwvQ-7v2CWK1oHD3nU3gA&oe=6357BB04"
            alt=""
            className="custom"
          />
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Cài đặt</span>
              <span onClick={() => dispatch(logout())}>Đăng xuất</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
