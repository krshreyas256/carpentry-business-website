import { useEffect, useState } from "react";

import { getGalleryImages } from "../firebase/firestore";

import GalleryCard from "../components/ui/GalleryCard";
import SectionTitle from "../components/ui/SectionTitle";

import "../styles/gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadGallery = async () => {
      try {
        setLoading(true);
        setError("");

        const galleryImages = await getGalleryImages();

        setImages(galleryImages);
      } catch (error) {
        console.error("Failed to load gallery:", error);
        setError("Unable to load gallery images.");
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">

        <SectionTitle
          title="Our Work"
          subtitle="A glimpse of our carpentry and interior work."
        />

        {loading && (
          <div className="gallery-status">
            <p>Loading our work...</p>
          </div>
        )}

        {!loading && error && (
          <div className="gallery-status gallery-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && images.length === 0 && (
          <div className="gallery-status">
            <p>Our work gallery will be updated soon.</p>
          </div>
        )}

        {!loading && !error && images.length > 0 && (
          <div className="gallery-grid">
            {images.map((image) => (
              <GalleryCard
                key={image.id}
                image={image}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Gallery;