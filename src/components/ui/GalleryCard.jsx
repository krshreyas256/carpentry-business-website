function GalleryCard({ image }) {
  return (
    <article className="gallery-card">
      <img
        src={image.imageUrl}
        alt={image.title}
        className="gallery-image"
        loading="lazy"
      />

      <div className="gallery-overlay">
        <h3>{image.title}</h3>
      </div>
    </article>
  );
}

export default GalleryCard;