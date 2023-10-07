import "./App.css";
import FetchApi from "./components/FetchApi";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h1>Count: {counter}</h1>
    </div>
  );
}

export default App;
