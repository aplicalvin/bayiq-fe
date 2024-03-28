import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import RootLayout from "./layout/RootLayout.jsx";
import Edukasi from "./pages/Edukasi.jsx";
import Konsultasi from "./pages/Konsultasi.jsx";
import Informasi from "./pages/Informasi.jsx";
import Komunitas from "./pages/Komunitas.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/edukasi",
                    element: <Edukasi />,
                },
                {
                    path: "/konsultasi",
                    element: <Konsultasi />,
                },
                {
                    path: "/informasi",
                    element: <Informasi />,
                },
                {
                    path: "/komunitas",
                    element: <Komunitas />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
