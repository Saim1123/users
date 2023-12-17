import React from "react";

const SearchPerson = () => {
  return (
    <div className="search-header">
      <section className="user-search">
        <input type="search" placeholder="search users" />
      </section>
      <section className="clear-users">
        <button>Clear All</button>
      </section>
    </div>
  );
};

export default SearchPerson;
