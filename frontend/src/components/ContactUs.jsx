import React from "react";

import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section
      className={classes.contactUsSection}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/contact_us_bg.png"
        })`,
      }}
    >
      <div className={`${classes.contactUsWrapper} container`}>
        <div className={classes.contactUsContent}>
          <div className={classes.contactUsAddress}>
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              quod amet aut assumenda dignissimos excepturi id omnis ad vitae
              tenetur?
            </p>
            <div className={classes.phone}>
              <img src="/icons/phone.png" alt="Phone" />
              <p>+123 123 1234</p>
            </div>
            <div className={classes.email}>
              <img src="/icons/mail.png" alt="Mail" />
              <p>gunner@support.au</p>
            </div>
            <div className={classes.address}>
              <img src="/icons/map.png" alt="Map" />
              <p>Address goes here</p>
            </div>
          </div>
          <div className={classes.contactUsForm}>
            <h4>Available 24/7</h4>
            <form>
              <div>
                <input type="text" name="name" placeholder="Your name" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your email" />
              </div>
              <div>
                <textarea
                  placeholder="Type your message"
                  name="message"
                  id=""
                  cols="10"
                  rows="10"
                ></textarea>
              </div>
              <div className={classes.submitBtn}>
                <button class="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
