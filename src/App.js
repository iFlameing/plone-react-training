import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import rootReducer from "./reducers";
import Faq from "./components/Faq";
import FaqItemView from "./components/FaqItemView";
import api from "./middleware/api";

import "./App.css";

const store = createStore(rootReducer, applyMiddleware(api));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Faq} />
          <Route path="/faq/:index" component={FaqItemView} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
