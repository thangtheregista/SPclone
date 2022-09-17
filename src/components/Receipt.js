import React from "react";
import { Link } from "react-router-dom";

function Receipt({ order, setOrder, setIsOrdered }) {
  console.log(order);

  return (
    <div>
      {"Thank you " +
        order.customer.firstname +
        " " +
        order.customer.lastname +
        " for your purchase."}
      <Link to="/SPclone">
        <button
          onClick={() => {
            setIsOrdered(false);
            setOrder({});
          }}
        >
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default Receipt;
