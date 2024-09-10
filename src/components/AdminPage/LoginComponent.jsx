import { useState } from "react";
import { useAuth } from "../../context/authContext";
import "./LoginComponent.css";
import loginImg from "../../assets/login-stroke-rounded.svg";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "  ") {
      login();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-pg">
      <div className="login-image-container">
        <img src={loginImg} alt="Login Page Image" className="login-image" />
      </div>
      <div className="login-form-container login-box">
        <div className="login-form">
          <h2>Admin Login</h2>
          <form className="form" autoComplete="off" onSubmit={handleLogin}>
            <div className="user-box-input-group">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="user-box-input-group">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="sign">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;




