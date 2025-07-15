import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ví dụ login thành công
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default LoginPage;
