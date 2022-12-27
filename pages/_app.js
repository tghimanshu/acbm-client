import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "../context/authContext";
import { HomeLayout } from "../Components/layouts/homeLayout";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const { asPath } = router;
  // const noNav = ["/login", "/register"];

  return (
    <AuthProvider>
      <HomeLayout>
        {/* {noNav.includes(asPath) ? null : <Header />} */}
        <Component {...pageProps} />
        {/* {noNav.includes(asPath) ? null : <Footer />} */}
      </HomeLayout>
    </AuthProvider>
  );
}

export default MyApp;
