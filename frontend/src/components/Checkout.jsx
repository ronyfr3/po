import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Checkout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../actions/orderActions";
import axios from "axios";
// import Paypal from "./Paypal";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  // const tax =
  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);
  console.log("cartitem", cartItems);
  const [val, setval] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    street: "",
    state: "",
    country: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setval({
      ...val,
      [name]: value,
    });
  };

  const pp = [];
  cartItems.map((x) =>
    pp.push({
      title: x.title,
      category: x.title,
      subcategory: x.subcategory,
      longdescription: x.longdescription,
      shortdescription: x.shortdescription,
      names: x.names,
      values1: x.names,
      values2: x.values2,
      qty: x.qty,
      image: x.image,
      price: x.price,
      // pass product as product id for populate
      product: x.product,
    })
  );
  console.log("pp", pp);
  const orderData = {
    user: {
      first_name: val.first_name,
      last_name: val.last_name,
      email: val.email,
      mobile: val.mobile,
    },
    orderItems: [pp],
    shippingAddress: {
      address: val.address,
      city: val.city,
      street: val.street,
      state: val.state,
      country: val.country,
    },
    shippingPrice: 150,
    totalPrice: totalPrice,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createOrder(orderData));
    axios.post("api/orders", orderData).then((res) => console.log(res.data));
  };

  return (
    <section className={classes.checkoutSection}>
      <div className={`${classes.checkoutWrapper} container`}>
        <div className={classes.checkoutLeft}>
          <form className={classes.checkoutForm}>
            <div className={classes.personalInformation}>
              <h5>Personal Information</h5>
              <div className={classes.firstLastName}>
                <div className={classes.firstName}>
                  <input
                    placeholder="First name"
                    type="text"
                    name="first_name"
                    value={val.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.last_name}>
                  <input
                    placeholder="Last name"
                    type="text"
                    name="last_name"
                    value={val.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <input
                  placeholder="Email address"
                  type="email"
                  name="email"
                  value={val.email}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.mobile}>
                <input
                  placeholder="Mobile"
                  type="text"
                  name="mobile"
                  value={val.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={classes.shipping}>
              <h5>Shipping</h5>
              <div className={classes.houseAptLocal}>
                <input
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={val.address}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.streetLocal}>
                <div className={classes.street}>
                  <input
                    placeholder="Street"
                    type="text"
                    name="street"
                    value={val.street}
                    onChange={handleChange}
                  />
                </div>
                <div className={classes.local}>
                  <input
                    placeholder="City"
                    type="text"
                    name="city"
                    value={val.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={classes.houseAptLocal}>
                <input
                  placeholder="State"
                  type="text"
                  name="state"
                  value={val.state}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.houseAptLocal}>
                <input
                  placeholder="Country"
                  type="text"
                  name="country"
                  value={val.country}
                  onChange={handleChange}
                />
              </div>
              {/* <select className={classes.state} name="" id="">
                <option value="">State</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
              </select>
              <select className={classes.country} name="" id="">
                <option value="">Country</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
              </select> */}
              {/* <div className={classes.saveAs}>
                <input type="checkbox" /> <span>Save as default address</span>
              </div> */}
            </div>
            {/* <div className={classes.payment}>
              <h5>Payment</h5>
              <div className={classes.paypalDebitCard}>
                <label htmlFor="paypal" className={classes.paypal}>
                  <span>Paypal/Skrill/Crypto</span>
                  <input name="payment" id="paypal" type="radio" />
                </label>
                <label htmlFor="debit-card" className={classes.debitCard}>
                  <span>Credit or Debit Card</span>
                  <input name="payment" id="debit-card" type="radio" />
                </label>
              </div>
              <div className={classes.number}>
                <input placeholder="Card number" type="number" />
              </div>
              <div className={classes.dateCvc}>
                <div className={classes.date}>
                  <input placeholder="Expire Date" type="date" />
                </div>
                <div className={classes.cvc}>
                  <input placeholder="CVC" type="text" />
                </div>
              </div>
            </div> */}
            <div className={classes.checkoutButtons}>
              {/* <Paypal/> */}
              {/* disable css by conditionally */}
              <button
                className={`${classes.confirmBtn} btn`}
                onClick={handleSubmit}
                disabled={
                  !val.first_name ||
                  !val.last_name ||
                  !val.email ||
                  !val.mobile ||
                  !val.address ||
                  !val.street ||
                  !val.city ||
                  !val.state ||
                  !val.country
                }
              >
                Confirm & Pay
              </button>
              <Link to="/" className={`${classes.continueBtn} btn`}>
                CONTINUE SHOPPING
              </Link>
            </div>
          </form>
        </div>
        <div className={classes.checkoutRight}>
          <div className={classes.checkoutRightHeading}>
            <h4>Summary</h4>
            <Link to="/">Back to Cart</Link>
          </div>
          <ul>
            <li>
              <p>Item</p>
              <span>{totalItems}</span>
            </li>
            <li>
              <p>Subtotal</p>
              <span>{totalPrice} aud</span>
            </li>
            {/* <li>
              <p>Shipping</p>
              <span>200.00 aud</span>
            </li>
            <li>
              <p>Tax(25%)</p>
              <span>350.00 aud</span>
            </li> */}
            {/* <li>
              <p>Discount</p>
              <span>-150.00 aud</span>
            </li> */}
            <li>
              <p>Total</p>
              <span>{totalPrice} aud</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
