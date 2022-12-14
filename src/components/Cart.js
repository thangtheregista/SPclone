import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { commerce } from "../lib/commerce.js";
function Cart({
  cart,
  setIsOrdered,
  handleUpdateToCart,
  handleDeleteToCart,
  handleRemoveToCart,
  fetchCart,
}) {
  useEffect(() => {
    fetchCart();
    console.log(cart.line_items);
  }, []);
  return (
    <div className="cart-items">
      <h1>Shopping Cart</h1>
      {cart.line_items && cart.line_items.length === 0 && (
        <div>
          There is nothing in the cart.
          <Link to="/SPclone">
            <button>Back to home.</button>{" "}
          </Link>
        </div>
      )}
      {cart.line_items &&
        cart.line_items.length !== 0 &&
        cart.line_items.map((item) => {
          return (
            <div key={item.id} className="item-details">
              <img src={item.image.url} />
              <h3>{item.name}</h3>
              <p>Price: {item.price.formatted_with_symbol}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="button-group">
                <button
                  onClick={() => {
                    handleUpdateToCart(item.id, item.quantity + 1);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    handleUpdateToCart(item.id, item.quantity - 1);
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    handleDeleteToCart(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      {cart.line_items && cart.line_items.length !== 0 && (
        <div className="total">
          <h1>{cart.subtotal.formatted_with_symbol}</h1>
          <button
            onClick={() => {
              handleRemoveToCart();
            }}
          >
            Empty Cart
          </button>
          <Link to="/SPclone/checkout">
            <button
              onClick={() => {
                setIsOrdered(false);
              }}
            >
              Checkout
            </button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
