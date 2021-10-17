import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";
import Faq from "./components/Faq";
import api from "./middleware/api";

import "./App.css";

const store = createStore(rootReducer, applyMiddleware(api));

const App = () => {
  return (
    <Provider store={store}>
      <Faq />
    </Provider>
  );
};

export default App;
