export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CENTER TEXT */}
        <div className="footer-content">
          <p className="footer-text">
            © 2026 All rights reserved.
          </p>

          <div className="footer-credits">
            <p className="credit-item">
              <span className="credit-label">Sam Fisher Artwork:</span>{" "}
              Fan art based on Splinter Cell © Ubisoft
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="footer-image">
          <img
            src="/assets/img/gallery/footer.webp"
            alt="Sam Fisher Artwork"
            className="footer-artwork-img"
          />
        </div>

      </div>
    </footer>
  );
}
