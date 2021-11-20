import React from "react";

import Header from '../components/Header'
import Footer from '../components/Footer'
import ShoppingCart from "../components/ShoppingCart";
import ShoppingCartBanner from "../components/ShoppingCartBanner";
import StayInTouch from "../components/StayInTouch";

const ShoppingCartScreen = () => {
  return (
    <>
      <Header />
      <ShoppingCartBanner />
      <ShoppingCart />
      <StayInTouch />
      <Footer />
    </>
  );
};

export default ShoppingCartScreen;
