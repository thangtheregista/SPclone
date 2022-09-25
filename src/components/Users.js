import React from "react";
import UserCard from "./UserCard";

function Users({ users, deleteUser }) {
  return (
    <div>
      {users &&
        users.map((user, index) => {
          return (
            <UserCard
              key={index}
              id={index}
              user={user}
              fname={user.fname}
              lname={user.lname}
              email={user.email}
              deleteUser={deleteUser}
            />
          );
        })}
    </div>
  );
}

export default Users;
