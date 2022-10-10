import { useRef } from "react";
import { useState } from "react";
import "./dangky.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Đăng nhập</button>
        </div>
      </div>
      <div className="container">
        <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
        <h2>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
        <p>
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Địa chỉ email" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Bắt đầu
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}