import React from "react";

import classes from "./StayInTouch.module.css";

const StayInTouch = () => {
  return (
    <section
      className={classes.stayInTouchSection}
    >
      <div className={`${classes.stayInTouchWrapper} container`}>
        <div className={classes.stayInTouchContent}>
          <h4>Stay in touch</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            temporibus?
          </p>
          <form className={classes.stayInTouchForm}>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
