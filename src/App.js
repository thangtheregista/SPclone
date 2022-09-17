import "./App.css";

// COMPONENTS
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn.js";
import { debounce } from "lodash";
import { commerce } from "./lib/commerce.js";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaginatedItems from "./components/PaginatedItems";

function App() {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("current-user"))
  );
  const [isLogged, setIsLogged] = useState(false);
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isOrdered, setIsOrdered] = useState(false);
  const productsURL = (productID) => {
    return `/product/` + productID;
  };

  const fetchProductsByCategory = async (category_slugs) => {
    const { data } = await commerce.products.list({
      category_slug: [category_slugs],
    });
    setProducts(data);
  };
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategories(data);
  };
  const fetchCart = async () => {
    try {
      const data = await commerce.cart.retrieve();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  const handleUpdateToCart = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item.cart);
  };
  const handleDeleteToCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item.cart);
  };
  const handleRemoveToCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item.cart);
  };
  const handleDeleteCart = async () => {
    const item = await commerce.cart.refresh();
    setCart(item.cart);
    console.log(item);
  };
  const textbounce = debounce(async (text) => {
    if (text.length > 2) {
      const { data } = await commerce.products.list({
        query: text,
      });
      setProducts(data);
    }
  }, 1000);

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, [isOrdered]);
  useEffect(() => {
    console.log(currUser);
  }, [isLogged]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/SPclone/signup" element={<SignUp />} />
          <Route
            exact
            path="/SPclone/signin"
            element={<SignIn setIsLogged={setIsLogged} />}
          />
          <Route
            exact
            path="/SPclone"
            element={[
              <Header
                cart={cart}
                fetchCart={fetchCart}
                textbounce={textbounce}
                fetchProducts={fetchProducts}
                isLogged={isLogged}
                currUser={currUser}
                setIsLogged={setIsLogged}
              />,
              <HomePage
                handleAddToCart={handleAddToCart}
                products={products}
                categories={categories}
                fetchProductsByCategory={fetchProductsByCategory}
              />,
              <PaginatedItems
                itemsPerPage={2}
                handleAddToCart={handleAddToCart}
                products={products}
              />,
            ]}
          />
          <Route
            exact
            path="/SPclone/cart"
            element={[
              <Header
                cart={cart}
                fetchCart={fetchCart}
                textbounce={textbounce}
                fetchProducts={fetchProducts}
                isLogged={isLogged}
                currUser={currUser}
                setIsLogged={setIsLogged}
              />,
              <Cart
                setIsOrdered={setIsOrdered}
                cart={cart}
                fetchCart={fetchCart}
                handleUpdateToCart={handleUpdateToCart}
                handleDeleteToCart={handleDeleteToCart}
                handleRemoveToCart={handleRemoveToCart}
              />,
            ]}
          />
          <Route
            exact
            path="/SPclone/checkout"
            element={[
              <Header
                cart={cart}
                fetchCart={fetchCart}
                textbounce={textbounce}
                fetchProducts={fetchProducts}
                isLogged={isLogged}
                currUser={currUser}
                setIsLogged={setIsLogged}
              />,
              <Checkout
                cart={cart}
                setCart={setCart}
                handleDeleteCart={handleDeleteCart}
                isOrdered={isOrdered}
                setIsOrdered={setIsOrdered}
                isLogged={isLogged}
                currUser={currUser}
              />,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
