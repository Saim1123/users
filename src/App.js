import { useState } from "react";
import "./App.css";
import SearchPerson from "./components/SearchPerson";
import { data } from "./data";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState(data);
  return (
    <main>
      <h1>Users</h1>
      <SearchPerson />
      <UsersList users={users} />
    </main>
  );
}

export default App;
