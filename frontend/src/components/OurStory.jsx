import React from "react";

import classes from "./OurStory.module.css";

const OurStory = () => {
  return (
    <section
      className={classes.ourStorySection}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(26, 34, 41, 0.8), rgba(26, 34, 41, 0.4)), url(${
          process.env.PUBLIC_URL + "images/our_story_bg.png"
        })`,
      }}
    >
      <div className={`${classes.ourStoryWrapper} container`}>
        <div className={classes.ourStoryContent}>
          <div>
            <h3>Our Story</h3>
            <h1>We had come a long way</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              deserunt fuga totam quia voluptatem id accusamus quidem est
              quisquam enim sapiente velit maxime cumque vel voluptatibus
              commodi, dolore nesciunt similique.
            </p>
            <div className={classes.learn}>
              <button className="btn">
                Learn More <img src="/icons/right_arrow.png" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
