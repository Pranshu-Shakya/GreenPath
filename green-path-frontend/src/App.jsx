import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Navbar from "./components/Navbar";
import AuthPage from "./Pages/Login";
import AiroMap from "./Pages/AiroMap";


function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/map" element={<AiroMap/>}/>
					<Route path="/login" element={<AuthPage/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
