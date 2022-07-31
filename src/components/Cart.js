import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div>
      {cart.line_items && cart.line_items.length === 0 && (
        <div>
          There is nothing in the cart.
          <Link to="/">
            <button>Back to home.</button>{" "}
          </Link>
        </div>
      )}
      {cart.line_items &&
        cart.line_items.length !== 0 &&
        cart.line_items.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price.formatted_with_symbol}</p>
              <p>{item.quantity}</p>
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
          );
        })}
      {cart.line_items && cart.line_items.length !== 0 && (
        <div>
          <h1>{cart.subtotal.formatted_with_symbol}</h1>
          <button
            onClick={() => {
              handleRemoveToCart();
            }}
          >
            Empty Cart
          </button>
          <Link to="/checkout">
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
