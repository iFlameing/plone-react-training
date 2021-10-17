import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";
import Faq from "./components/Faq";

import "./App.css";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Faq />
    </Provider>
  );
};

export default App;
