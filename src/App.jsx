import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";

import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            Public Website
        ========================= */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <FloatingWhatsApp />
            </>
          }
        />


        {/* =========================
            Admin Login
        ========================= */}
        <Route
          path="/admin"
          element={<AdminLogin />}
        />


        {/* =========================
            Protected Admin Dashboard
        ========================= */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;