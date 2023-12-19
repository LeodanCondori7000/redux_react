import CakeContainer from "./components/CakeContainer.jsx";
import IceCreamContainer from "./components/IceCreamContainer.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <IceCreamContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
