import React, { useEffect } from "react";

function UserCard({ id, deleteUser, user, fname, lname, email }) {
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div>
      <h4>
        {fname}
        {lname}
      </h4>
      <h5>{email}</h5>
      <button
        onClick={() => {
          deleteUser(email);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default UserCard;
