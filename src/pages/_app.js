import Head from "next/head";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../components/Navbar/Navbar.css";
import "../components/Hero/Hero.css";
import "../components/AboutSection/AboutSection.css";
import "../components/ServicesSection/ServicesSection.css";
import "../components/Testimonials/Testimonials.css";
import "../components/Footer/Footer.css";
import "../components/AboutPage/AboutPage.css";
import "../components/ServicesPage/ServicesPage.css";
import "../components/Contact/ContactPage.css";

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