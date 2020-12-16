import React from "react";
import RouterPage from "./router/router";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//redux
import { ToastContainer } from "react-toastify";
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
        <ToastContainer />
        <div className="">
          <RouterPage />
        </div>
      </Provider>
    </div>
  );
}

export default App;
