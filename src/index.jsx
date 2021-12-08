import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import AuthModalProvider from "./Contexts/AuthModalContext";
import Loading from "./Components/Atoms/Loading";
import { store, persistor } from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AuthModalProvider>
          <App />
        </AuthModalProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
