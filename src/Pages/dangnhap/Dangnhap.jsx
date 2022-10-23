import "./dangnhap.scss";
import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";
import Logo from '../../img/LOGONEW.png'



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={Logo}

            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>ĐĂNG NHẬP</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Đăng nhập
          </button>
          <span>Bạn chưa có tài khoản? Vui lòng nhấn <Link className="abc" to="/register">
            <div className="loginButton">Đăng kí</div>
          </Link>
          </span>
        </form>
      </div>
    </div>
  );
}