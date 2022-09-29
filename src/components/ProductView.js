import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import { Link } from "react-router-dom";
import "./ProductView.css";
function ProductView({ handleAddToCart, handleUpdateToCart }) {
  const [product, setProduct] = useState({}); //single product info
  const [productImg, setProductImg] = useState();
  const [productPrice, setProductPrice] = useState();
  const fetchProductById = async (id) => {
    const response = await commerce.products.retrieve(id);
    setProduct(response);
    setProductImg(response.image.url);
    setProductPrice(response.price.formatted_with_code);
    console.log(response);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProductById(id[2]);
  }, []);
  return (
    <div className="product-view">
      <Link to="/SPclone">
        <button>Back</button>{" "}
      </Link>
      <div className="product-img">
        <img src={productImg} />
      </div>
      <div className="product-info">
        {product.name}
        <div className="product-price">Price: {productPrice}</div>
        <div className="product-button">
          <button
            onClick={() => {
              handleAddToCart(product.id, 1);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
