import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import BottomNavbar from "./components/BottomNavbar";

const App = () => {
	return (
		<div>
			<Navbar />
			<BottomNavbar />
			<Routes />
		</div>
	);
};

export default App;
