import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './PopularItems.module.css';

const PopularItems = () => {
  const { products } = useSelector((state) => state.productsReducer);
  console.log('products', products);
  console.log(products.map((x) => x.files.files));
  return (
    <section className={classes.popularItemSection}>
      <div className={`${classes.popularItemWrapper} container`}>
        <h3>POPULAR ITEMS</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          ullam voluptates eius voluptatem omnis reprehenderit iure consequuntur
          at. Hic vel maxime eos.
        </p>
        <div className={classes.popularItemContent}>
          <div className={classes.navItem}>
            <Link to='' className={classes.active}>
              ALL CATEGORIES
            </Link>
            <Link to=''>KNIVES</Link>
            <Link to=''>HANDGUN</Link>
            <Link to=''>ASSUALT</Link>
            <Link to=''>HUNTING</Link>
            <Link to=''>OPTICS</Link>
          </div>
        </div>
        <div className={classes.itemCard}>
          {products?.map((product) => {
            // console.log(product?.files?.files[0].filename);
            return (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className={classes.card}
              >
                <div className={classes.imageCard}>
                  <img
                    src={
                      `${process.env.PUBLIC_URL}` +
                      `/uploads/${product?.files?.files[0].filename}`
                    }
                    alt={product.name}
                  />
                  <div className={classes.itemOverlay}>
                    <div className={classes.addToCart}>
                      <img src='/icons/cart_light.png' alt='Cart' />
                      <p>ADD TO CART</p>
                    </div>
                    <h6>Buy Now</h6>
                  </div>
                </div>
                <div className={classes.itemContainer}>
                  <div className={classes.left}>
                    <h5>{product?.productInfo?.title}</h5>
                    <p>${product?.productInfo?.price}</p>
                  </div>
                  {/* <div className={classes.right}>{product.offer}%</div> */}
                </div>
              </Link>
            );
          })}
        </div>
        <div className={classes.browseAll}>
          <button class='btn'>
            Browse All <img src='/icons/right_arrow.png' alt='Arrow' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
