import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./PopularCategory.module.css";

const PopularCategory = () => {
  const { products } = useSelector((state) => state.productsReducer);
  console.log(products);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const uniqueArray = products
    ?.map((x) => x.category.toLowerCase())
    .filter(onlyUnique);

  return (
    <section className={classes.popularCategorySection}>
      {/* <similarProduct category={category} /> */}
      <div className={`${classes.popularCategoryWrapper} container`}>
        <h3>Popular Categories</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          ullam voluptates eius voluptatem omnis reprehenderit iure consequuntur
          at. Hic vel maxime eos.
        </p>
        <div className={classes.popularCategoryContent}>
          {uniqueArray?.map((unique) => (
            <Link key={unique} to={`/category/${unique}`}>
              <img src="/images/popular_category1.png" alt="Popular Category" />
              <h4>{unique}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
