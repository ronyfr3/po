import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { addToCart } from '../actions/cartActions';
import Header from '../components/Header';
import './ProductScreen.css';

const ProductScreen = ({ match }) => {
  const [tap, setTap] = useState(false);
  const [tap1, setTap1] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  const category = match.params.category;

  const categoryArray = products.filter(
    (product) => product.category.toLowerCase() === category,
  );
  console.log(categoryArray);
  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const settings = {
    dots: true,
    // arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  const [val1, setVal1] = useState([]);
  const [val2, setVal2] = useState([]);
  const inStockCheck = () => {
    setTap(!tap);
    setVal2(
      categoryArray.filter((x) => parseInt(x.productInfo.countInStock) > 0),
    );
  };
  const outOfStockCheck = () => {
    setTap1(!tap1);
    setVal1(
      categoryArray.filter((x) => parseInt(x.productInfo.countInStock) === 0),
    );
  };
  console.log(val1);
  return (
    <>
      <Header />
      <section
        className='productBannerSection'
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/images/product_banner.png'
          })`,
        }}
      >
        <div className='productBannerWrapper container'>
          <div className='productBannerContent'>
            <div>
              <h1>Hunting Gears</h1>
              <ul className='breadcrumb'>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/all-category'>All Category</Link>
                </li>
                <li>Hunting Gears</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='productSection'>
        <div className='productWrapper container'>
          <div className='productContent'>
            <div className='totalSortItems'>
              <div className='total'>
                <p>
                  Total: <span>12,555 items</span>
                </p>
              </div>
              <div className='sortItemsForms'>
                <form className='sortByForm'>
                  <label htmlFor=''>Sort by:</label>
                  <select name='' id=''>
                    <option value=''>In Stock</option>
                    <option value=''>Out Of Stock</option>
                    <option value=''>New Arrivals</option>
                    <option value=''>Best Sellings</option>
                  </select>
                </form>
                <form className='itemsForm'>
                  <label htmlFor=''>Items:</label>
                  <select name='' id=''>
                    <option value=''>10 Per Page</option>
                    <option value=''>20 Per Page</option>
                    <option value=''>30 Per Page</option>
                    <option value=''>40 Per Page</option>
                  </select>
                </form>
              </div>
            </div>
            <div className='product'>
              <div className='productLeftContent'>
                <form className='availabilityForm'>
                  <h5>AVAILABILITY</h5>
                  <div>
                    <input
                      type='checkbox'
                      id='in-stock'
                      name=''
                      value=''
                      onClick={inStockCheck}
                    />
                    <label htmlFor='in-stock'> IN STOCK</label>
                    <br />
                  </div>
                  <div>
                    <input
                      type='checkbox'
                      id='out-of-stock'
                      name=''
                      value=''
                      onClick={outOfStockCheck}
                    />
                    <label htmlFor='out-of-stock'> OUT OF STOCK</label>
                    <br />
                  </div>
                  <div>
                    <input type='checkbox' id='arrivals' name='' value='' />
                    <label htmlFor='arrivals'> NEW ARRIVALS</label>
                    <br />
                  </div>
                  <div>
                    <input type='checkbox' id='sellings' name='' value='' />
                    <label htmlFor='sellings'> BEST SELLINGS</label>
                    <br />
                  </div>
                </form>
                {/* <form className="product-type-form" action="">
                  <h5>PRODUCT TYPE</h5>
                  <div>
                    <input type="checkbox" id="all" name="" value="" />
                    <label htmlFor="all"> ALL</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="automatic" name="" value="" />
                    <label htmlFor="automatic"> AUTOMATIC</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="manual" name="" value="" />
                    <label htmlFor="manual"> MANUAL</label>
                    <br />
                  </div>
                </form> */}
                {/* <form className="calliber-form" action="">
                  <h5>CALLIBER</h5>
                  <div>
                    <input type="checkbox" id="calliber1" name="" value="" />
                    <label htmlFor="calliber1"> 7.56 MM</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="calliber2" name="" value="" />
                    <label htmlFor="calliber2"> 5.56 MM</label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="calliber3" name="" value="" />
                    <label htmlFor="calliber3"> 9 MM</label>
                    <br />
                  </div>
                </form> */}
              </div>
              <div className='product-right-content'>
                {tap === true ? (
                  <>
                    {val2.map((c) => (
                      <div className='product-and-review'>
                        <div className='product-review-stock'>
                          <h3>{c.name}</h3>
                          <h5>Cal: 7.56MM</h5>
                          <p>$ 100 AUD</p>
                          <div className='review-stock'>
                            <div className='review'>
                              <i className='fas fa-star'></i>
                              <i className='fas fa-star'></i>
                              <i className='fas fa-star'></i>
                              <i className='fas fa-star'></i>
                            </div>
                            <div className='stock'>
                              {c.countInStock === 0 ? (
                                <p style={{ color: '#F54748' }}>Out of Stock</p>
                              ) : (
                                <p>In stock</p>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => addToCartHandler(c._id, 1)}
                            className='btn'
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div classNameName='product-slider'>
                          <Slider {...settings}>
                            {c.productInfo.image.map((image) => (
                              <div>
                                <img src={image} alt='Product' />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {categoryArray.map((c) => {
                      console.log(c);
                      return (
                        <div className='product-and-review'>
                          <div className='product-review-stock'>
                            <h3>{c.name}</h3>
                            <h5>Cal: 7.56MM</h5>
                            <p>$ 100 AUD</p>
                            <div className='review-stock'>
                              <div className='review'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                              </div>
                              <div className='stock'>
                                {c.countInStock === 0 ? (
                                  <p style={{ color: '#F54748' }}>
                                    Out of Stock
                                  </p>
                                ) : (
                                  <p>In stock</p>
                                )}
                              </div>
                            </div>
                            <button
                              onClick={() => addToCartHandler(c._id, 1)}
                              className='btn'
                            >
                              Add to Cart
                            </button>
                          </div>
                          <div classNameName='product-slider'>
                            <Slider {...settings}>
                              {c.files.files.map((image) => {
                                console.log(image?.filename);
                                return (
                                  <div>
                                    <img
                                      src={
                                        `${process.env.PUBLIC_URL}` +
                                        `/uploads/${image?.filename}`
                                      }
                                      alt='Product'
                                    />
                                  </div>
                                );
                              })}
                            </Slider>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}

                <div className='pagination'>
                  <div className='previous'>
                    <button>Previous</button>
                  </div>
                  <ul className='number'>
                    <li className='p-active'>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                  <div className='next'>
                    <button>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductScreen;
