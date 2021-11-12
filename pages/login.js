import React from "react";
function Login() {
  const logIn = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLogin", JSON.stringify(true));
    }
  };
  const logOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isLogin");
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={logIn}>Login</button>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default Login;
