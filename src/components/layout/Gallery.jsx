import gallery from "../../assets/generate/gallery.json";
import { useState } from "react";

export default function Gallery(){
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        <div className="gallery-header">
          <h2>$ ls /gallery</h2>
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-image"
                loading="lazy"
              />

              <div className="gallery-overlay">
                <p className="gallery-title">{item.alt}</p>
                <span className="gallery-type">{item.type}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL — FULL IMAGE */}
        {selectedImage && (
          <div
            className="gallery-modal"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              {/* FULL 1080x1080 IMAGE */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modal-image"
              />

              <div className="modal-info">
                <p className="modal-title">{selectedImage.alt}</p>
                <span className="modal-type">{selectedImage.type}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
