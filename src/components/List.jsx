import React from "react";
import UserSkills from "./UserSkills";

const List = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id} className="user">
            <div className="user-img">
              <img src={user.img} alt={user.name} />
            </div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <div className="user-skills">
                <UserSkills skills={user.skills} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
