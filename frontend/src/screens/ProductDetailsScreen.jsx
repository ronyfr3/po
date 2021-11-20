import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { addToCart } from '../actions/cartActions';
import { listProductDetails } from '../actions/productsAction';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import SpecificationAndReviews from "../components/Product"
// import RelatedProduct from "../components/RelatedProduct"
import StayInTouch from '../components/StayInTouch';
import classes from './ProductDetailsScreen.module.css';

// import products from '../products'

const ProductDetailsScreen = ({ history, match }) => {
  let slider1;
  let slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const id = match.params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;
  console.log('product', product);

  useEffect(() => {
    dispatch(listProductDetails(id));
    setNav1(slider1);
    setNav2(slider2);
  }, [dispatch, id, slider1, slider2]);

  const addToCartHandler = (qty) => {
    dispatch(addToCart(id, qty));
  };
  return (
    <>
      <Header />
      {loading && <h2>Loading...</h2>}
      <section className={classes.productDetailsSection}>
        <div className={`${classes.productDetailsWrapper} container`}>
          <div className={classes.productDetailsContent}>
            <div className={classes.productDetailsLeft}>
              <div className={classes.productSlider}>
                <div className={classes.productSliderOne}>
                  <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
                    {product?.files?.files?.map((image) => (
                      <div>
                        <img
                          src={
                            `${process.env.PUBLIC_URL}` +
                            `/uploads/${image?.filename}`
                          }
                          alt=''
                        />
                      </div>
                    ))}
                    {/* <div>
                  <img src={product.productInfo} alt="" />
                  </div>
                  <div>
                  <img src={product.image} alt="" />
                  </div>
                  <div>
                  <img src={product.image} alt="" />
                  </div>
                  <div>
                  <img src={product.image} alt="" />
                  </div> */}
                  </Slider>
                </div>
                <div className={classes.productSliderTwo}>
                  <Slider
                    asNavFor={nav1}
                    ref={(slider) => (slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}
                  >
                    {product?.productInfo?.image?.map((image) => (
                      <div>
                        <img src={image} alt='' />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className={classes.productDetailsRight}>
              <div className={classes.productDetailsName}>
                <h6>{product?.category}</h6>
                <h1>{product?.productInfo?.title}</h1>
                {/* <h5>CalA: 7.56MM</h5> */}
              </div>
              <div className={classes.productDetailsPrice}>
                <h6>price</h6>
                <div>
                  <h4>${product?.productInfo?.price} aud</h4>
                  {/* <h6>$92348923 aud</h6>
                  <span> -15% </span> */}
                </div>
              </div>
              <div className={classes.productDetailsStock}>
                {/* {product.countInStock === 0 ? (
                  <h6 style={{ color: '#F54748' }}>Out Of Stock</h6>
                ) : (
                  <h6>In Stock</h6>
                )} */}
                <div>
                  <h5>4.5/5</h5>
                  <div className={classes.review}>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <Link to='/'>See reviews</Link>
                </div>
              </div>
              <div className={classes.productDetailsDescription}>
                <h6>Description</h6>
                <p>{product?.productInfo?.shortdescription}</p>
              </div>
              <div className={classes.buyAdd}>
                <button className='btn'>Buy Now</button>
                <button
                  onClick={() => addToCartHandler(1)}
                  className={`btn ${classes.add}`}
                >
                  Add to Cart
                </button>
              </div>
              <div className={classes.productDetailsShare}>
                <h6>Share on:</h6>
                <div className={classes.socialMediaShare}>
                  <Link to='/'>
                    <i className='fab fa-facebook'></i>
                  </Link>
                  <Link to='/'>
                    <i className='fab fa-instagram'></i>
                  </Link>
                  <Link to='/'>
                    <i className='fab fa-linkedin-in'></i>
                  </Link>
                  <Link to='/'>
                    <i className='fab fa-twitter'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.specificationAndReviewsSection}>
        <div className={`${classes.specificationAndReviewsWrapper} container`}>
          <ul className={classes.specificationReviews}>
            <li>
              <Link to='/'>specification</Link>
            </li>
            <li>
              <Link to='/'>reviews</Link>
            </li>
          </ul>
          <div className={classes.specificationAndReviewsContent}>
            <div className={classes.specificationAndReviewsLeft}>
              <ul className={classes.attributes}>
                {product?.productInfo?.info?.name.map((name) => (
                  <li>{name}</li>
                ))}
              </ul>
              <ul className={classes.attributes}>
                {product?.productInfo?.info?.values1.map((value) => (
                  <li>{value}</li>
                ))}
              </ul>
            </div>
            <div className={classes.specificationAndReviewsRight}>
              <img src='/images/product_video.png' alt='Product Video' />
            </div>
          </div>
          <p>{product?.productInfo?.longdescription}</p>
        </div>
      </section>
      {/* <SpecificationAndReviews product={product} /> */}
      {/* <RelatedProduct product={product} /> */}
      <StayInTouch />
      <Footer />
    </>
  );
};

export default ProductDetailsScreen;
