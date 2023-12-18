import React from "react";
import List from "./List";

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      <List users={users} />
    </div>
  );
};

export default UsersList;
