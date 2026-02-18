import { useState } from "react";

import "./App.css";
import MapComponent from "./components/MapComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthPage from "./Pages/Login";


function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/map" element={<MapComponent/>}/>
					<Route path="/login" element={<AuthPage/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
