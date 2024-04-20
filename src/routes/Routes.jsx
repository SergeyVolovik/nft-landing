import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const RoutesСomp = ({ comp }) => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" component={comp} />
				<Route component={comp} />
			</Routes>
		</Router>
	);
};
