import { useEffect, useState } from "react";

import { getClients } from "../firebase/firestore";

import ClientCard from "../components/ui/ClientCard";
import SectionTitle from "../components/ui/SectionTitle";

import "../styles/clients.css";

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadClients = async () => {
      try {
        setLoading(true);
        setError("");

        const clientData = await getClients();

        setClients(clientData);
      } catch (error) {
        console.error("Failed to load clients:", error);
        setError("Unable to load our clients.");
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, []);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">

        <SectionTitle
          title="Our Clients & Partners"
          subtitle="Authorized partner and stockist of premium architectural hardware products."
        />

        {loading && (
          <div className="clients-status">
            <p>Loading our clients...</p>
          </div>
        )}

        {!loading && error && (
          <div className="clients-status clients-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && clients.length === 0 && (
          <div className="clients-status">
            <p>Our client list will be updated soon.</p>
          </div>
        )}

        {!loading && !error && clients.length > 0 && (
          <div className="clients-grid">
            {clients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Clients;