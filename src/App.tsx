import "./App.css";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import AdvancedCounter from "./components/AdvancedCounter";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>useState Hook Демонстрация</h1>
        <p className="subtitle">Примери за useState в React (практично и ясно)</p>
      </header>

      <main className="app-main">
        <Counter />
        <UserProfile />
        <AdvancedCounter />
      </main>

      <footer className="app-footer">
        <p>React Hooks • useState</p>
      </footer>
    </div>
  );
};

export default App;
