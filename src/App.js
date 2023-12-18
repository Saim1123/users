import { useState } from "react";
import "./App.css";
import SearchPerson from "./components/SearchPerson";
import { data } from "./data";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState(data);
  const [person, setPerson] = useState("");
  const [empty, setEmpty] = useState(false);

  const handleChange = (event) => {
    setPerson(event.target.value);
  };
  return (
    <main>
      <h1>Users</h1>
      <SearchPerson
        setEmpty={setEmpty}
        handleChange={handleChange}
        person={person}
        setUsers={setUsers}
      />
      {empty ? (
        <h2>No Users</h2>
      ) : (
        <UsersList
          users={users.filter((user) =>
            user.name.toLowerCase().includes(person)
          )}
        />
      )}
    </main>
  );
}

export default App;
