import "./dangnhap.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Đăng nhập<p></p></h1>
          <input type="email" placeholder="Email hoặc số điện thoại" />
          <input type="password" placeholder="Nật khẩu" />
          <button className="loginButton">Đăng nhập</button>
          <span>
            Bạn mới tham gia Neflit <b>Đăng ký ngay</b>
          </span>
          <small>
          Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. 
           <b>Tìm hiểu thêm</b>.
          </small>
        </form>
      </div>
    </div>
  );
}