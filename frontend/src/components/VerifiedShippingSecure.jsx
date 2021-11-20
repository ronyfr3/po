import React from "react";

import classes from './VerifiedShippingSecure.module.css'

const VerifiedShippingSecure = () => {
  return (
    <section className={classes.verifiedShippingSecureSection}>
      <div className={`${classes.verifiedShippingSecureWrapper} container`}>
        <div className={classes.verifiedShippingSecureContent}>
          <div>
            <img src="/icons/verified_logo.png" alt="Verified" />
            <h4>Licensed & Verified</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              amet.
            </p>
          </div>
          <div>
            <img src="/icons/shipping_logo.png" alt="Shipping" />
            <h4>Free Shipping</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              amet.
            </p>
          </div>
          <div>
            <img src="/icons/secure_logo.png" alt="Secure" />
            <h4>Secure Platform</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifiedShippingSecure;
