import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn({ setIsLogged, users }) {
  const [formErrors, setFormErrors] = useState({});
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log(users);
    e.preventDefault();
    const errors = validate(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      setIsLogged(true);
      const currUser = users
        .filter((currUser) => currUser.email === user.email)
        .find((e) => e.password === user.password);

      localStorage.setItem("current-user", JSON.stringify(currUser));
    }
  };

  const validate = (values) => {
    const errors = {};
    const e_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const pass_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!e_regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (!users.find((user) => user.email !== values.email)) {
      errors.email = "Wrong Email";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!pass_regex.test(values.password)) {
      errors.password =
        "Minimum eight characters, at least one letter and one number:";
    } else if (
      !users
        .filter((user) => user.email === values.email)
        .find((e) => e.password === values.password)
    ) {
      errors.password = "Wrong password";
    }
    return errors;
  };
  useEffect(() => {
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    // }
  }, []);

  return (
    <div>
      {isSubmit ? (
        <div>
          <Link to="/SPclone">
            <a href="#">Back to Home</a>
          </Link>
        </div>
      ) : (
        <div className="login-page">
          <div className="form">
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
                Not registered? <a href="/SPclone/signup">Create an account</a>
              </p>
            </form>
            <Link to="/SPclone/">Back to home</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
