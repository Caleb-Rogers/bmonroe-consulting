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

<link rel="stylesheet" href="assets/css/style.css" />;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css"
          integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
