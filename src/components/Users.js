import React from "react";

const Users = ({ users = [] }) => {
  return (
    <div>
      <h1>Users Camp</h1>
      <table border="1">
        <thead>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </thead>
       
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
          ))}
        
      </table>
    </div>
  );
};

export default Users;
