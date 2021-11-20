import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footerTopSection}>
      <div className={`${classes.footerTopWrapper} container`}>
        <div className={classes.footerTopContent}>
          <div>
            <h6>Opening Hours</h6>
            <ul>
              <li>Mon-Fri: 9am to 5pm</li>
              <li>Sat: 10am to 3pm</li>
              <li>
                Sun: <span className={classes.closed}>Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <h6>Trending Categories</h6>
            <ul>
              <li>
                <Link to="/">Firearms & parts</Link>
              </li>
              <li>
                <Link to="/">Handguns</Link>
              </li>
              <li>
                <Link to="/">Shooting Gears</Link>
              </li>
              <li>
                <Link to="/">Ammunition</Link>
              </li>
              <li>
                <Link to="/">Appearel</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6>Customer Service</h6>
            <ul>
              <li>
                <Link to="/">Support Centre</Link>
              </li>
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6>My Account</h6>
            <ul>
              <li>
                <Link to="/">My Cart</Link>
              </li>
              <li>
                <Link to="/">Wishlist</Link>
              </li>
              <li>
                <Link to="/">Order History</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Account Settings</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6>Socila Media</h6>
            <div className={classes.socialMediaIcon}>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.facebook.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <h6>Payment methods</h6>
            <div className={classes.paymentMethodsIcon}>
              <img src="/icons/visa.png" alt="Visa" />
              <img src="/icons/mastercard.png" alt="Mastercard" />
              <img src="/icons/paypal.png" alt="Paypal" />
              <img src="/icons/applepay.png" alt="Apple pay" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerBottomContent}>
        <p>Copyright @ All Rights Reserved | Precison Ordnance 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
