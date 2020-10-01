import React from "react";
import ReactDOM from "react-dom";
import Page from "./screens/Page";
import * as serviceWorker from "./serviceWorker";
import { googleTrackId } from "./constants/constants";
import ReactGA from "react-ga";

const initializeReactGA = () => {
  ReactGA.initialize(googleTrackId);
  ReactGA.pageview("/", "gatza-tracker", "gatza");
};

initializeReactGA();

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
