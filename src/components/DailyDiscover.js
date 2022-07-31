import React from "react";
import "./DailyDiscover.css";
import Product from "./Product.js";
import { commerce } from "../lib/commerce.js";
import { useState, useEffect } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Giày bốt nữ ulzzang cao cổ khóa cạnh chất liệu da cao cấp phong cách hàn quốc trẻ trung cá tính dễ phối đồ",
//     price: "₫94.000 - ₫111.000",
//     sold: "Đã bán 640",
//     place: "Hà Nội",
//   },
//   {
//     id: 2,
//     name: "Giày bốt nữ mã 9061 cao cổ gót cao 7p chất liệu da bóng cao cấp dây buộc kéo khóa sau phong cách ulzzang hàn quốc 2021",
//     price: "₫139.000 - ₫169.000",
//     sold: "Đã bán 640",
//     place: "Hà Nội",
//   },
//   {
//     id: 3,
//     name: "Dép bánh mì nữ quai ngang hình gấu cute - Dép lê nữ nhựa đi mưa đi biển đi trong nhà dép yz thời trang mùa hè 2021",
//     price: "₫39.000 - ₫50.000",
//     sold: "Đã bán 640",
//     place: "Hà Nội",
//   },
//   {
//     id: 4,
//     name: "Sandal nữ 3 quai ngang hoa cúc fashion - Dép quai hậu nữ đi học đi chơi đi biển sandal ulzzang hot hè 2021 đẹp giá rẻ",
//     price: "₫119.000 - ₫129.000",
//     sold: "Đã bán 640",
//     place: "Hà Nội",
//   },
// ];
function DailyDiscover({ handleAddToCart, products }) {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({});
  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };
  // const fetchCart = async () => {
  //   const data = await commerce.cart.retrieve();
  //   setCart(data);
  // };
  // const handleAddToCart = async (productId, quantity) => {
  //   const item = await commerce.cart.add(productId, quantity);
  //   setCart(item.cart);
  // };
  // useEffect(() => {
  //   fetchProducts();
  // fetchCart();
  // }, []);
  // console.log(cart);
  return (
    <div className="dd-container">
      <div className="dd-header-wrapper">
        <div className="dd-header-container">
          <a href="#" className="dd-titles">
            GỢI Ý HÔM NAY
          </a>
          <a href="google.com" className="dd-titles">
            SALES
          </a>
        </div>
      </div>
      <div className="dd-items-container">
        {products.length > 0 &&
          products.map((product) => {
            const linkUrl = `/${product.id}`;
            return (
              <Product
                linkUrl={linkUrl}
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </div>
  );
}

export default DailyDiscover;
