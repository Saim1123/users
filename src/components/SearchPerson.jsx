const SearchPerson = ({ person, setUsers, setEmpty, handleChange }) => {
  return (
    <div className="search-header">
      <section className="user-search">
        <input
          value={person}
          onChange={(e) => handleChange(e)}
          type="search"
          placeholder="search users"
        />
      </section>
      <section className="clear-users">
        <button
          onClick={() => {
            setUsers([]);
            setEmpty(true);
          }}
        >
          Clear All
        </button>
      </section>
    </div>
  );
};

export default SearchPerson;
