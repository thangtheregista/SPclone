import React, { useEffect } from "react";
import "./HomePage.css";
import Categories from "./Categories.js";
import DailyDiscover from "./DailyDiscover.js";

function HomePage({
  products,
  handleAddToCart,
  categories,
  fetchProductsByCategory,
}) {
  // console.log(products)
  return (
    <div className="home-page-container-wrapper">
      <div className="home-page-container">
        <div className="components-wrapper">
          <Categories
            categories={categories}
            fetchProductsByCategory={fetchProductsByCategory}
          />
        </div>
        <div className="components-wrapper">
          <DailyDiscover
            products={products}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
