function ClientCard({ client }) {
  return (
    <article className="client-card">

      <div className="client-logo-wrapper">
        <img
          src={client.imageUrl}
          alt={`${client.name} logo`}
          className="client-logo"
          loading="lazy"
        />
      </div>

      <h3 className="client-name">
        {client.name}
      </h3>

      {client.category && (
        <div className="client-category">
          {client.category}
        </div>
      )}

    </article>
  );
}

export default ClientCard;