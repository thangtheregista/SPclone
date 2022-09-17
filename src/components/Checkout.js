import React, { useState, useEffect } from "react";

import { commerce } from "../lib/commerce.js";

import CustomerForm from "./CustomerForm.js";
import Receipt from "./Receipt.js";
function Checkout({
  cart,
  setCart,
  handleDeleteCart,
  isOrdered,
  setIsOrdered,
  isLogged,
  currUser,
}) {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });
  const [order, setOrder] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [token, setToken] = useState({});
  const generateCheckoutToken = async () => {
    if (cart.id) {
      try {
        commerce.checkout
          .generateToken(cart.id, {
            type: "cart",
          })
          .then((checkout) => {
            console.log(checkout);

            setToken(checkout);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const validate = (values) => {
    const errors = {};
    const e_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const p_regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!values.fname) {
      errors.fname = "First name is required!";
    }
    if (!values.lname) {
      errors.lname = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!e_regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (!p_regex.test(values.phone)) {
      errors.phone = "This is not a valid phone number!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      generateCheckoutToken();
    }
  };

  const handleCaptureCheckout = async (checkoutToken, customer) => {
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: customer.fname,
        lastname: customer.lname,
        email: customer.email,
        phone: customer.phone,
      },
      shipping: {
        name: "Domestic",
        street: customer.address,
        town_city: customer.city,
        country: "US",
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242424242424242",
          expiry_month: "04",
          expiry_year: "24",
          cvc: "242",
          postal_zip_code: "42242",
        },
      },
    };

    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutToken.id,
        orderData
      );
      console.log(incomingOrder);
      setOrder(incomingOrder);
      setIsOrdered(true);
      handleDeleteCart();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [formErrors, user, cart]);
  useEffect(() => {
    if (isLogged) {
      setUser(currUser);
    }
  }, []);

  return (
    <div>
      {isOrdered ? (
        <Receipt
          order={order}
          setOrder={setOrder}
          setIsOrdered={setIsOrdered}
        />
      ) : (
        <CustomerForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formErrors={formErrors}
          token={token}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
          handleCaptureCheckout={handleCaptureCheckout}
          user={user}
          setUser={setUser}
          setCart={setCart}
        />
      )}
    </div>
  );
}

export default Checkout;
