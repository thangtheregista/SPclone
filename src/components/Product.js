import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product, handleAddToCart, image }) {
  return (
    <a href="#" className="product-wrapper">
      <div className="product-item__box">
        <div className="product__img">
          <Link to={`${product.id}`}>
            <img src={image} alt="" />
          </Link>

          <div className="product__img-favourite-label">
            <p>Yêu thích</p>
          </div>
          <div className="product__img-discount">
            <p className="product__img-discount-percent">55%</p>
            <p className="product__img-discount-reduce">GIẢM</p>
          </div>
        </div>
        <div className="product__info">
          <Link to={`${product.id}`}>
            <p className="product__info--name">{product.name}</p>
          </Link>

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
