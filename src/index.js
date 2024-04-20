import React from "react";
import ReactDOM from "react-dom";
import "./source/scss/index.scss";
import { App } from "./App";
import RoutesСomp from "./routes";

ReactDOM.render(
	<React.StrictMode>
		<RoutesСomp comp={App} />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
