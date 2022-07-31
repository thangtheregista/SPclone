import React from "react";
import "./Product.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Product({ product, handleAddToCart, linkUrl }) {
  return (
    <a href="#" className="product-wrapper">
      {/* <div className="product-container">
        <div className="product-img">
          <img src="/./.:0" alt="" />
        </div>
        <div className="product-info">
          <div className="product-title">{product.name}</div>
          <div className="product-subinfo">
            <span className="product-discount">11% Giảm</span>
            <div className="product-price-and-sold">
              <div className="product-price">{product.price}</div>
              <div className="product-sold">{product.sold}</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="product-item__box">
        <div
          className="product__img"
          // style="background-image: url(./asset/image/sandal.jfif);"
        >
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
          <Link to={linkUrl}>
            <p className="product__info--name">{product.name}</p>
          </Link>
          <span className="product__info--price">
            {product.price.formatted_with_symbol}
          </span>
          <div className="product__quality">
            {/* <i className="far fa-heart product__quality--like"></i>
            <div className="product__quality--fivestar">
              <i className="fas fa-star product__quality--fivestar-icon"></i>
              <i className="fas fa-star product__quality--fivestar-icon"></i>
              <i className="fas fa-star product__quality--fivestar-icon"></i>
              <i className="fas fa-star product__quality--fivestar-icon"></i>
              <i className="fas fa-star product__quality--fivestar-icon"></i>
            </div> */}
            {/* <span className="product__quality--sold">{product.sold}</span> */}
          </div>
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
