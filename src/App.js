import "./App.scss";
import Table from "./components/table";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
