import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";
// import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const { asPath } = router;
  // const noNav = ["/login", "/register"];

  return (
    <>
      {/* {noNav.includes(asPath) ? null : <Header />} */}
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* {noNav.includes(asPath) ? null : <Footer />} */}
    </>
  );
}

export default MyApp;
