import CakeContainer from "./components/CakeContainer.jsx";
import IceCreamContainer from "./components/IceCreamContainer.jsx";
import ItemContainer from "./components/ItemContainer.jsx";
import NewCakeContainer from "./components/NewCakeContainer.jsx";
import UserContainer from "./components/UserContainer.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <ItemContainer cake/>
        <ItemContainer />
        <IceCreamContainer />
        <CakeContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
