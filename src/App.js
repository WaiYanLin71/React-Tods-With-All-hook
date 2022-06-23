import React from "react";
import { Outlet } from "react-router-dom";
import Provider from "./store/Provider";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<Provider>
				<Outlet />
			</Provider>
		</>
	);
}

export default App;
