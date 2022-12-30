import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users);
  console.log(users);

  return (
    <div>
      <ul>
        Users!
        {
        /* In addition, display the total number of users curently in the store */
        <p>Total Users: {users.length}</p>
        }
        {
          users.length !== 0
            ? users.map((user) => {
                return <li key={user.username}>{user.username}</li>;
              })
            : null
        }
      </ul>
    </div>
  );
}

export default Users;
