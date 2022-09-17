import React from "react";

function CustomerForm({
  handleSubmit,
  handleChange,
  formErrors,
  token,
  isSubmit,
  setIsSubmit,
  handleCaptureCheckout,
  user,
  setUser,
}) {
  return (
    <div>
      {!isSubmit ? (
        <form onSubmit={handleSubmit}>
          <label for="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={handleChange}
            value={user.fname}
          />
          <br />
          <p>{formErrors.fname}</p>
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={handleChange}
            value={user.lname}
          />
          <br />
          <p>{formErrors.lname}</p>
          <br />
          <label for="email">Email:</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
          <br />
          <p>{formErrors.email}</p>
          <br />
          <label for="phone">Phone:</label>
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={user.phone}
          />
          <br />
          <p>{formErrors.phone}</p>
          <br />
          <label for="city">City:</label>
          <br />
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            value={user.city}
          />
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
            value={user.address}
          />
          <br />
          <p>{formErrors.address}</p>
          <br />
          <button type="submit">Submit</button>{" "}
        </form>
      ) : (
        <div>
          <h1>Order Summary</h1>
          {token.live &&
            token.live.line_items.map((product) => {
              return (
                <div key={product.id}>
                  <p>{product.name}</p>
                  <p>{product.quantity}</p>
                  <p>{product.line_total.formatted_with_symbol}</p>
                </div>
              );
            })}
          {token.live && <h3>{token.live.subtotal.formatted_with_symbol}</h3>}
          <button
            onClick={() => {
              setIsSubmit(!isSubmit);
              setUser({
                fname: "",
                lname: "",
                email: "",
                phone: "",
                city: "",
                address: "",
              });
            }}
          >
            Return
          </button>
          <button
            onClick={() => {
              handleCaptureCheckout(token, user);
            }}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomerForm;
