import React from "react";
import ReactDOM from "react-dom";

// Mount fn to start up the application
const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
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
