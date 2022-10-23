import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from '../../img/LOGONEW.png'


import "./dangky.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
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
        <h1>Không giới hạn phim</h1>
        <p>
        Nhập email của bạn để tạo tài khoản
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Nhập địa chỉ email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
             Bắt đầu
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Bắt đầu
            </button>
          </form>
        )}
        <br />

        
            <span>Bạn đã có tài khoản? Vui lòng nhấn <Link className="abc" to="/login">
            <div className="loginButton">Đăng nhập</div>
          </Link>
          </span>

      </div>
    </div>
  );
}
