import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";

/**
 * Main application component for Next.js.
 *
 * This component wraps every page in the application. It provides:
 * - Global CSS imports (Bootstrap, custom styles, Bootstrap icons).
 * - A persistent layout including the Header and Footer components.
 *
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.Component - The active page component to be rendered.
 * @param {Object} props.pageProps - The initial props preloaded for the page.
 * @returns {JSX.Element} The application wrapper with layout.
 */
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
