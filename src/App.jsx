import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Edukasi from "./pages/Edukasi.jsx";
import Konsultasi from "./pages/Konsultasi.jsx";
import Informasi from "./pages/Informasi.jsx";
import Komunitas from "./pages/Komunitas.jsx";
import HomePage from "./pages/HomePage.jsx";
import Roadmap from "./pages/Roadmap.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/edukasi" element={<Edukasi />} />
                    <Route path="/konsultasi" element={<Konsultasi />} />
                    <Route path="/informasi" element={<Informasi />} />
                    <Route path="/komunitas" element={<Komunitas />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
