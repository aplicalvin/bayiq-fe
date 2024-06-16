import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Edukasi from "./pages/Edukasi.jsx";
import Konsultasi from "./pages/Konsultasi.jsx";
import Informasi from "./pages/Informasi.jsx";
import Komunitas from "./pages/Komunitas.jsx";
import HomePage from "./pages/HomePage.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import NotFound from "./pages/NotFound.jsx";
import PilihSesi from "./pages/PilihSesi.jsx";
import DetailBidan from "./components/Informasi/DetailBidan.jsx";
import DetailDokter from "./components/Informasi/DetailDokter.jsx";
import DetailTempat from "./components/Informasi/DetailTempat.jsx";
import Konfirm from "./pages/Konfirm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Testimoni from "./pages/Testimoni.jsx";
import DetailEdu from "./pages/DetailEdu.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import AdmDashboard from "./admin/AdmDashboard.jsx";
import DrDashboard from "./dokter/DrDashboard.jsx";
import DrinLayout from "./layout/DrLayout.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/edukasi" element={<Edukasi />} />
                    <Route path="/konsultasi" element={<Konsultasi />} />
                    <Route path="/pilihsesi" element={<PilihSesi />} />
                    <Route path="/pilihsesi/konfirmasi" element={<Konfirm />} />
                    <Route path="/informasi" element={<Informasi />} />
                    <Route path="/detailbidan" element={<DetailBidan />} />
                    <Route path="/detaildokter" element={<DetailDokter />} />
                    <Route path="/detailtempat" element={<DetailTempat />} />
                    <Route path="/komunitas" element={<Komunitas />} />
                    <Route path="/testimoni" element={<Testimoni />} />
                    <Route path="/roadmap" element={<Roadmap />} />
                    <Route path="/article/" element={<DetailEdu />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />{" "}
                </Route>
                <Route path="/" element={<LoginLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
                <Route path="/admin/" element={<AdminLayout />}>
                    <Route path="/admin/dashboard" element={<AdmDashboard />} />
                </Route>
                <Route path="/dokter/" element={<DrinLayout />}>
                    <Route path="/dokter/dashboard" element={<DrDashboard />} />
                </Route>
                <Route path="/hospital/" element={<DrinLayout />}>
                    <Route
                        path="/hospital/dashboard"
                        element={<DrDashboard />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
