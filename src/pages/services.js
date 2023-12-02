import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ServicesPage from "../components/ServicesPage/ServicesPage";

export default function Services() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <Navbar visible={visible}/>
      <ServicesPage />
    </>
  );
};