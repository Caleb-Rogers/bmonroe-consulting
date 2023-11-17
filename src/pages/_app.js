import Head from "next/head";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar/Navbar.css";
import "../components/Hero/Hero.css";
import "../components/Services/Services.css";
import "../components/About/AboutSection.css";
import "../components/Testimonials/Testimonials.css";
import "../components/Footer/Footer.css";
import "../components/About/AboutPage.css";
import "../components/Contact/ContactPage.css"

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
/>;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
/>;
<link rel="stylesheet" href="assets/css/style.css" />;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
