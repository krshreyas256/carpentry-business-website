import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import { auth } from "../firebase/config";
import {
  uploadGalleryImage,
  uploadClientLogo,
} from "../firebase/storage";

import {
  addGalleryImage,
  getGalleryImages,
  deleteGalleryImageData,
  addClient,
  getClients,
  deleteClientData,
} from "../firebase/firestore";

import "../styles/admin.css";

function AdminDashboard() {
  const [images, setImages] = useState([]);
  const [clients, setClients] = useState([]);

  const [clientName, setClientName] = useState("");
  const [clientLogo, setClientLogo] = useState(null);

  const [clientLoading, setClientLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Carpentry Services");
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [fetchingImages, setFetchingImages] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadImages = async () => {
    try {
      setFetchingImages(true);

      const galleryImages = await getGalleryImages();

      setImages(galleryImages);
    } catch (error) {
      console.error("Failed to load gallery:", error);
      setError("Failed to load gallery images.");
    } finally {
      setFetchingImages(false);
    }
  };

  const loadClients = async () => {
  try {
    const clientData = await getClients();
    setClients(clientData);
  } catch (error) {
    console.error("Failed to load clients:", error);
    setError("Failed to load clients.");
  }
};

  useEffect(() => {
    loadImages();
    loadClients();
  }, []);

  const handleUpload = async (e) => {
  e.preventDefault();

  setMessage("");
  setError("");

  if (!file) {
    setError("Please select an image.");
    return;
  }

  if (!file.type.startsWith("image/")) {
    setError("Please select a valid image file.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    setError("Image size must be less than 5 MB.");
    return;
  }

  try {
    setLoading(true);

    // Upload image to Cloudinary
    const uploadedImage = await uploadGalleryImage(file);

    // Save image information in Firestore
    await addGalleryImage({
      title: title.trim(),
      category,
      imageUrl: uploadedImage.url,
      storagePath: uploadedImage.path,
    });

    // Reset form state
    setTitle("");
    setCategory("Carpentry Services");
    setFile(null);

    // Reset file input
    e.target.reset();

    setMessage("Image uploaded successfully.");

    // Refresh gallery
    await loadImages();

  } catch (error) {
    console.error("Upload failed:", error);

    setError(
      error.message || "Failed to upload image. Please try again."
    );

  } finally {
    setLoading(false);
  }
};

const handleClientUpload = async (e) => {
  e.preventDefault();

  setMessage("");
  setError("");

  if (!clientName.trim()) {
    setError("Please enter the client name.");
    return;
  }

  if (!clientLogo) {
    setError("Please select a client logo.");
    return;
  }

  if (!clientLogo.type.startsWith("image/")) {
    setError("Please select a valid image file.");
    return;
  }

  if (clientLogo.size > 5 * 1024 * 1024) {
    setError("Logo size must be less than 5 MB.");
    return;
  }

  try {
    setClientLoading(true);

    // Upload logo to Cloudinary
    const uploadedLogo = await uploadClientLogo(clientLogo);

    // Save client information to Firestore
    await addClient({
      name: clientName.trim(),
      imageUrl: uploadedLogo.url,
      publicId: uploadedLogo.publicId,
    });

    setClientName("");
    setClientLogo(null);

    // Reset file input
    e.target.reset();

    setMessage("Client added successfully.");

    await loadClients();

  } catch (error) {
    console.error("Client upload failed:", error);

    setError(
      error.message || "Failed to add client. Please try again."
    );

  } finally {
    setClientLoading(false);
  }
};

const handleClientDelete = async (client) => {
  const confirmDelete = window.confirm(
    `Remove "${client.name}" from the client list?`
  );

  if (!confirmDelete) {
    return;
  }

  try {
    setError("");
    setMessage("");

    await deleteClientData(client.id);

    setClients((currentClients) =>
      currentClients.filter((item) => item.id !== client.id)
    );

    setMessage("Client removed successfully.");

  } catch (error) {
    console.error("Client delete failed:", error);

    setError("Failed to remove client.");
  }
};

  const handleDelete = async (image) => {
    const confirmDelete = window.confirm(
       `Remove "${image.title || "this image"}" from the gallery?`
      );

      if (!confirmDelete) {
        return;
      }

      try {
        setError("");
        setMessage("");

        // Remove image information from Firestore.
        // The Cloudinary file will remain in Cloudinary for now.
        await deleteGalleryImageData(image.id);

        setImages((currentImages) =>
          currentImages.filter((item) => item.id !== image.id)
        );

        setMessage("Image removed from the gallery successfully.");
      } catch (error) {
        console.error("Delete failed:", error);
        setError("Failed to remove image from the gallery.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
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

        <section className="admin-section">

          <div className="admin-section-heading">
            <h2>Gallery Management</h2>
            <p>
              Add photos of completed carpentry and interior work.
            </p>
          </div>

          <form
            className="gallery-upload-form"
            onSubmit={handleUpload}
          >

            <div className="form-group">
              <label htmlFor="gallery-title">
                Project Title
              </label>

              <input
                id="gallery-title"
                type="text"
                placeholder="Example: Modular Kitchen"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gallery-category">
                Category
              </label>

              <select
                id="gallery-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Carpentry Services">
                  Carpentry Services
                </option>

                <option value="Interior Work">
                  Interior Work
                </option>

                <option value="Furniture">
                  Custom Furniture
                </option>

                <option value="Repairs">
                  Repairs
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gallery-image">
                Project Image
              </label>

              <input
                id="gallery-image"
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />

              <small>
                Maximum file size: 5 MB
              </small>
            </div>

            {file && (
              <p className="selected-file">
                Selected: {file.name}
              </p>
            )}

            {error && (
              <p className="form-error">
                {error}
              </p>
            )}

            {message && (
              <p className="form-success">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="admin-upload-button"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload Image"}
            </button>

          </form>

        </section>

        <section className="admin-section">

          <div className="admin-section-heading">
            <h2>Uploaded Work</h2>
            <p>
              Manage the images currently displayed in your gallery.
            </p>
          </div>

          {fetchingImages ? (
            <p>Loading gallery...</p>
          ) : images.length === 0 ? (
            <div className="empty-gallery">
              <p>
                No gallery images yet.
              </p>

              <span>
                Upload your first completed project above.
              </span>
            </div>
          ) : (
            <div className="admin-gallery-grid">

              {images.map((image) => (
                <article
                  className="admin-gallery-card"
                  key={image.id}
                >

                  <img
                    src={image.imageUrl}
                    alt={image.title}
                  />

                  <div className="admin-gallery-card-content">

                    <h3>
                      {image.title}
                    </h3>

                    <p>
                      {image.category}
                    </p>

                    <button
                      className="delete-button"
                      onClick={() => handleDelete(image)}
                    >
                      Delete
                    </button>

                  </div>

                </article>
              ))}

            </div>
          )}

        </section>

        <section className="admin-section">

  <div className="admin-section-heading">
    <h2>Clients Management</h2>
    <p>
      Add logos of clients whose work you have completed.
    </p>
  </div>

  <form
    className="gallery-upload-form"
    onSubmit={handleClientUpload}
  >

    <div className="form-group">
      <label htmlFor="client-name">
        Client Name
      </label>

      <input
        id="client-name"
        type="text"
        placeholder="Example: ABC Interiors"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="client-logo">
        Client Logo
      </label>

      <input
        id="client-logo"
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        onChange={(e) => setClientLogo(e.target.files[0])}
        required
      />

      <small>
        Maximum file size: 5 MB
      </small>
    </div>

    {clientLogo && (
      <p className="selected-file">
        Selected: {clientLogo.name}
      </p>
    )}

    <button
      type="submit"
      className="admin-upload-button"
      disabled={clientLoading}
    >
      {clientLoading ? "Uploading..." : "Add Client"}
    </button>

  </form>

</section>

<section className="admin-section">

  <div className="admin-section-heading">
    <h2>Uploaded Clients</h2>
    <p>
      Manage the clients displayed on your website.
    </p>
  </div>

  {clients.length === 0 ? (
    <div className="empty-gallery">
      <p>No clients added yet.</p>

      <span>
        Add your first client above.
      </span>
    </div>
  ) : (
    <div className="admin-gallery-grid">

      {clients.map((client) => (
        <article
          className="admin-gallery-card"
          key={client.id}
        >

          <img
            src={client.imageUrl}
            alt={client.name}
          />

          <div className="admin-gallery-card-content">

            <h3>
              {client.name}
            </h3>

            <button
              className="delete-button"
              onClick={() => handleClientDelete(client)}
            >
              Delete
            </button>

          </div>

        </article>
      ))}

    </div>
  )}

</section>

      </main>

    </div>
  );
}

export default AdminDashboard;