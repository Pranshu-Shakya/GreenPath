import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MapComponent from "./components/MapComponent";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Cleanest Route Finder</h1>
			<MapComponent />
		</>
	);
}

export default App;
