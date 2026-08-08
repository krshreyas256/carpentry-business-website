import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/config";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="admin-dashboard">

      <header className="admin-dashboard-header">

        <div>
          <h1>Admin Dashboard</h1>
          <p>Shree Wood Works</p>
        </div>

        <button onClick={handleLogout}>
          Logout
        </button>

      </header>

      <main className="admin-dashboard-content">

        <div className="admin-welcome">
          <h2>Welcome to the Admin Panel</h2>

          <p>
            From here you will be able to manage your gallery,
            client logos, and website content.
          </p>
        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;