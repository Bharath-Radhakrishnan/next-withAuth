import Login from "../pages/login";
import Router from "next/router";

const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    // let isLoggedIn = false;
    let isLoggedIn = false;
    if (typeof window !== "undefined") {
      const val = localStorage.getItem("isLogin");
      isLoggedIn = JSON.parse(val);
    }
    // const { isLoggedIn } = props;

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      if (typeof window !== "undefined") {
        Router.push("/login");
      }
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
