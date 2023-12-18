import React from "react";
import List from "./List";

const UsersList = ({ users }) => {
  return (
    <div>
      <List users={users} />
    </div>
  );
};

export default UsersList;
