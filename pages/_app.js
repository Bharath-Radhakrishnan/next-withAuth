import Layout from "../components/Layout";
import { UserContext, isLogin } from "../context/user";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const val = isLogin();
  return (
    <UserContext.Provider value={val}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
