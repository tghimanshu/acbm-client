import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
