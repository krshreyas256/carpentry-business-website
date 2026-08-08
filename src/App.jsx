import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public website */}
        <Route path="/" element={<Home />} />

        {/* Admin login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected admin dashboard */}
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