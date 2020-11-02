import React from "react";
import FetchDataPage from "./router/fetch_AllData";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
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
          <FetchDataPage />
        </div>
      </Provider>
    </div>
  );
}

export default App;
