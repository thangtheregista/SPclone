import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";

function ProductView({ handleAddToCart, handleUpdateToCart }) {
  const [product, setProduct] = useState({}); //single product info
  const [productImg, setProductImg] = useState();
  const fetchProductById = async (id) => {
    const response = await commerce.products.retrieve(id);
    setProduct(response);
    setProductImg(response.image.url);
    console.log(response);
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProductById(id[2]);
  }, []);
  return (
    <div>
      <div className="product-img">
        <img src={productImg} />
      </div>
      <div className="product-info">
        {product.name}
        <div>
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
