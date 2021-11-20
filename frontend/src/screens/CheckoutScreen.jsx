import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Checkout from '../components/Checkout'
import CheckoutBanner from '../components/CheckoutBanner'

const CheckoutScreen = () => {
  return (
    <>
      <Header />
      <CheckoutBanner/>
      <Checkout/>
      <Footer />
    </>
  )
}

export default CheckoutScreen
