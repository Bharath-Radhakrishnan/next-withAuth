import React from "react";
export const isLogin = () => {
  if (typeof window !== "undefined") {
    const val = localStorage.getItem("isLogin");
    return JSON.parse(val);
  }
  return false;
};
export const UserContext = React.createContext();
