import "./App.css";
import FetchApi from "./components/FetchApi";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment)}>+</button>
      {isLogin ? <h3>ログインに成功！</h3> : <h3>ゴグインしてください！</h3>}
    </div>
  );
}

export default App;
