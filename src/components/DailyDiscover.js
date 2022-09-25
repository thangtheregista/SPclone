import React from "react";
import "./DailyDiscover.css";
import Product from "./Product.js";

import { useEffect } from "react";

function DailyDiscover({ handleAddToCart, products, currentItems }) {
  useEffect(() => {
    console.log(currentItems);
  }, [currentItems, products]);
  return (
    <div className="dd-container">
      <div className="dd-items-container">
        {currentItems &&
          currentItems.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                image={product.image.url}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
      </div>
    </div>
  );
}

export default DailyDiscover;
