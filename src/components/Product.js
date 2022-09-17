import React from "react";
import "./Product.css";

function Product({ product, handleAddToCart }) {
  return (
    <a href="#" className="product-wrapper">
      <div className="product-item__box">
        <div className="product__img">
          <img src="https://i.imgur.com/1vhzqnH.jpeg" alt="" />
          <div className="product__img-favourite-label">
            <p>Yêu thích</p>
          </div>
          <div className="product__img-discount">
            <p className="product__img-discount-percent">55%</p>
            <p className="product__img-discount-reduce">GIẢM</p>
          </div>
        </div>
        <div className="product__info">
          <p className="product__info--name">{product.name}</p>

          <span className="product__info--price">
            {product.price.formatted_with_symbol}
          </span>
          <div className="product__quality"></div>
          <span className="product__info--place">
            <button
              onClick={() => {
                handleAddToCart(product.id, 1);
              }}
            >
              Add to cart
            </button>
          </span>
        </div>
      </div>
    </a>
  );
}

export default Product;
