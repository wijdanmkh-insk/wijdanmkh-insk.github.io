import { useEffect, useRef, useState } from 'react';

export default function Footer(){
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // IntersectionObserver watches when the footer enters/exits the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting = true when footer is visible, false when not
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Triggers when 20% of footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current); // Start watching the footer
    }

    // Cleanup: stop watching when component unmounts
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">

        {/* CENTER TEXT */}
        <div className="footer-content">
          <p className="footer-text">
            © 2026 Wijdan K. All rights reserved.
          </p>

          <div className="footer-credits">
            <p className="credit-item">
              <span className="credit-label">Sam Fisher Artwork:</span>{" "}
              Fan art by Wijdan K. | Character © Ubisoft
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE - Adds 'footer-image-visible' class when isVisible is true */}
        <div className={`footer-image ${isVisible ? 'footer-image-visible' : ''}`}>
          <a href="https://en.wikipedia.org/wiki/Tom_Clancy%27s_Splinter_Cell">
          <img
            src="/assets/img/gallery/conviction.png"
            alt="Sam Fisher Artwork"
            className="footer-artwork-img"
          />
          </a>
        </div>

      </div>
    </footer>
  );
}
