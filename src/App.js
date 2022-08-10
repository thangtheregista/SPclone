import "./App.css";

// COMPONENTS
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
import ProductInfo from "./components/ProductInfo";
import Login from "./components/Login.js";
import SignIn from "./components/SignIn.js";
import { debounce } from "lodash";
import { commerce } from "./lib/commerce.js";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Testing from "./components/Testing.js";

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
    console.log(data);
  };
  const fetchCart = async () => {
    // const data = await commerce.cart.retrieve();
    // setCart(data);
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
  // const returnAnElement = ""

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, [isOrdered]);
  useEffect(() => {
    console.log(currUser);
  }, [isLogged]);
  // console.log(products);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/signin"
            element={<SignIn setIsLogged={setIsLogged} />}
          />
          {/* <Header
            cart={cart}
            fetchCart={fetchCart}
            textbounce={textbounce}
            fetchProducts={fetchProducts}
          /> */}
          <Route
            exact
            path="/"
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
              <Testing />,
            ]}
          />
          <Route
            exact
            path="/cart"
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
            path="/checkout"
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
          {/* <Route
            exact
            path={linkUrl}
            // element={[
            //   <Header
            //     cart={cart}
            //     fetchCart={fetchCart}
            //     textbounce={textbounce}
            //     fetchProducts={fetchProducts}
            //     isLogged={isLogged}
            //     currUser={currUser}
            //     setIsLogged={setIsLogged}
            //   />]}
            element={{ returnAnElement }}
          /> */}
        </Routes>
        {/* <Banner /> */}
      </div>
    </Router>
  );
}

export default App;
