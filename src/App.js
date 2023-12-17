import "./App.css";
import List from "./components/List";
import SearchPerson from "./components/SearchPerson";

function App() {
  return (
    <main>
      <h1>Users</h1>
      <SearchPerson />
      <List />
    </main>
  );
}

export default App;
