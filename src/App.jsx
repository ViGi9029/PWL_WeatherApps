import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardPage from "./pages/dashboard/DashboardPage";
import FavoritePage from "./pages/dashboard/FavoritePage";
import ProfilPage from "./pages/dashboard/ProfilPage";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify([]));
        localStorage.setItem("db", JSON.stringify([]));
        localStorage.setItem("favHome", JSON.stringify([]));
    }, []);

    return (
        <div className="w-full min-h-screen bg-[#D0BFFF]">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/favorit" element={<FavoritePage />} />
                    <Route path="/profil" element={<ProfilPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
