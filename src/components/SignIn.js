import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn({ setIsLogged }) {
  const [formErrors, setFormErrors] = useState({});
  const oUser = JSON.parse(localStorage.getItem("users"));
  const [prevUsers, setPrevUsers] = useState(oUser);
  const [isSubmit, setIsSubmit] = useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      setIsLogged(true);
      const currUser = prevUsers
        .filter((currUser) => currUser.email === user.email)
        .find((e) => e.password === user.password);
      // setCurrUser(currUser);
      localStorage.setItem("current-user", JSON.stringify(currUser));
      // console.log(oUser);
      // if (Object.keys(prevUsers[0]).length === 0) {
      //   setPrevUsers([user]);
      // } else {
      //   // setPrevUsers([...prevUsers, user]);
      // }
      // console.log(currUser);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(name, value);
  };
  const validate = (values) => {
    console.log(values);
    const errors = {};
    const e_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const p_regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const pass_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!e_regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (
      // Object.keys(prevUsers[0]).length !== 0 &&
      !prevUsers.find((user) => user.email !== values.email)
    ) {
      // console.log();
      errors.email = "Wrong Email";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!pass_regex.test(values.password)) {
      errors.password =
        "Minimum eight characters, at least one letter and one number:";
    } else if (
      !prevUsers
        .filter((user) => user.email === values.email)
        .find((e) => e.password === values.password)
    ) {
      errors.password = "Wrong password";
    }
    return errors;
  };
  useEffect(() => {
    // console.log(prevUsers);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(localStorage.getItem("prevUsers"));
      // console.log(prevUsers);
      // localStorage.setItem("users", JSON.stringify(prevUsers));
      // const oUser = JSON.parse(localStorage.getItem("users"));
      // console.log(oUser);
      // console.log(prevUsers);
    }
  }, [oUser]);
  // console.log(oUser);

  return (
    <div>
      {/* {isSubmit ? (
        <div>
          <Link to="/">
            <a href="#">Back to Home</a>
          </Link>
        </div>
      ) : (
        <div>
          Sign In
          <form onSubmit={handleSubmit}>
            <label for="email">Email:</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
            />
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
            <button type="submit">Sign In</button>{" "}
          </form>
        </div>
      )} */}
      {/* <button>create</button> */}
      {isSubmit ? (
        <div>
          <Link to="/">
            <a href="#">Back to Home</a>
          </Link>
        </div>
      ) : (
        <div className="login-page">
          <div className="form">
            {/* <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form> */}
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>
              <button type="submit">login</button>
              <p className="message">
                Not registered? <a href="/login">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
