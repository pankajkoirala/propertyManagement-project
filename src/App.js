import React from "react";
import RouterPage from "./router/router";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { reducer } from "./redux_pract/sample";

import { rootReducer } from "./redux/rootReducer";

//store
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="">
          <RouterPage />
        </div>
      </Provider>
    </div>
  );
}

export default App;
