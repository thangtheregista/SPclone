import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    c_password: "",
    phone: "",
    city: "",
    address: "",
  });

  const [prevUsers, setPrevUsers] = useState([{}]);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      if (Object.keys(prevUsers[0]).length === 0) {
        setPrevUsers([user]);
      } else {
        setPrevUsers([...prevUsers, user]);
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
    const pass_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
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
    } else if (
      Object.keys(prevUsers[0]).length !== 0 &&
      prevUsers.find((user) => user.email === values.email)
    ) {
      errors.email = "Email is duplicated!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!pass_regex.test(values.password)) {
      errors.password =
        "Minimum eight characters, at least one letter and one number:";
    }
    if (!values.c_password) {
      errors.c_password = "Please Re-enter your password!";
    } else if (values.c_password !== values.password) {
      errors.c_password = "Please enter the right password!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (!p_regex.test(values.phone)) {
      errors.phone = "This is not a valid phone number!";
    } else if (
      Object.keys(prevUsers[0]).length !== 0 &&
      prevUsers.find((p) => p.phone === values.phone)
    ) {
      errors.phone = "Phone number is duplicated!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    return errors;
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("users")) !== null) {
      const oUser = JSON.parse(localStorage.getItem("users"));
      setPrevUsers(oUser);
      console.log(oUser);
    } else {
      const oUser = JSON.parse(localStorage.getItem("users"));
      console.log(oUser);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem("users", JSON.stringify(prevUsers));
      const oUser = JSON.parse(localStorage.getItem("users"));

      console.log(oUser);
    }
  }, [formErrors, user]);

  return (
    <div>
      <Link to="/SPclone">
        <a href="#">Back to Home</a>
      </Link>
      Login
      <form onSubmit={handleSubmit}>
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" onChange={handleChange} />
        <br />
        <p>{formErrors.fname}</p>
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" onChange={handleChange} />
        <br />
        <p>{formErrors.lname}</p>
        <br />
        <label for="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" onChange={handleChange} />
        <br />
        <p>{formErrors.email}</p>
        <br />
        <label for="password">Enter Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <p>{formErrors.password}</p>
        <br />
        <label for="c_password">Confirm Password:</label>
        <br />
        <input
          type="password"
          id="c_password"
          name="c_password"
          onChange={handleChange}
        />
        <br />
        <p>{formErrors.c_password}</p>
        <br />
        <label for="phone">Phone:</label>
        <br />
        <input type="text" id="phone" name="phone" onChange={handleChange} />
        <br />
        <p>{formErrors.phone}</p>
        <br />
        <label for="city">City:</label>
        <br />
        <input type="text" id="city" name="city" onChange={handleChange} />
        <br />
        <p>{formErrors.city}</p>
        <br />
        <label for="address">Address:</label>
        <br />
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
        />
        <br />
        <p>{formErrors.address}</p>
        <br />
        <button type="submit">Sign Up</button>{" "}
        <div>
          Have an account?{" "}
          <Link to="/SPclone/signin">
            <a href="">Sign In</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
