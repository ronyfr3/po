import React from 'react';
import { useSelector } from 'react-redux';
import CivilianMilitaryMembershipEvents from '../components/CivilianMilitaryMembershipEvents';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
// import HomeBanner from '../components/HomeBanner'
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import OurStory from '../components/OurStory';
import PopularCategory from '../components/PopularCategory';
import PopularItems from '../components/PopularItems';
import StayInTouch from '../components/StayInTouch';
import VerifiedShippingSecure from '../components/VerifiedShippingSecure';

const HomeScreen = () => {
  // const dispatch = useDispatch()
  const { products } = useSelector((state) => state.productsReducer);

  return (
    <>
      <Header />
      <HomeBanner />
      <VerifiedShippingSecure products={products} />
      <PopularCategory />
      {/* {products.map(product => (
        <PopularItems product={product} />
      ))} */}
      <PopularItems products={products} />
      <CivilianMilitaryMembershipEvents />
      <ContactUs />
      <OurStory />
      <StayInTouch />
      <Footer />
    </>
  );
};

export default HomeScreen;
