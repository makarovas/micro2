import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount fn to start up the application
const mount = (el) => {
  ReactDOM.render(<App />, el);
};
// if we are in dev and in isolation call immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
// we are running through container
export { mount };
