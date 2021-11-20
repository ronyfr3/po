import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./HomeBanner.css";

const HomeBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section
      className="homeBannerSection"
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(26, 34, 41, 0.8),
      rgba(26, 34, 41, 0.4)
    ),
    url(${process.env.PUBLIC_URL + "/images/home_hero_banner.png"})`,
      }}
    >
      <div className="homeBannerWrapper container">
        <Slider {...settings}>
          <div className="homeBanner">
            <h3>The all new mk15</h3>
            <h1>Made for accuracy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              deserunt fuga totam quia voluptatem id accusamus quidem est
              quisquam enim sapiente velit maxime cumque vel voluptatibus
              commodi, dolore nesciunt similique.
            </p>
            <div>
              <button className="btn">
                <span>shop now</span>{" "}
                <img src="/icons/right_arrow.png" alt="Arrow" />
              </button>
            </div>
          </div>
          <div className="homeBanner">
            <h3>The all new mk15</h3>
            <h1>Made for accuracy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              deserunt fuga totam quia voluptatem id accusamus quidem est
              quisquam enim sapiente velit maxime cumque vel voluptatibus
              commodi, dolore nesciunt similique.
            </p>
            <div>
              <button className="btn">
                <span>shop now</span>{" "}
                <img src="/icons/right_arrow.png" alt="Arrow" />
              </button>
            </div>
          </div>
          <div className="homeBanner">
            <h3>The all new mk15</h3>
            <h1>Made for accuracy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              deserunt fuga totam quia voluptatem id accusamus quidem est
              quisquam enim sapiente velit maxime cumque vel voluptatibus
              commodi, dolore nesciunt similique.
            </p>
            <div>
              <button className="btn">
                <span>shop now</span>{" "}
                <img src="/icons/right_arrow.png" alt="Arrow" />
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeBanner;
