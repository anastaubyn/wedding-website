import { useState } from "react";
import "./Story.css";

const images = [
    "/georgia-mountain.jpg",
    "/cafe-phillipines.jpg",
  ];

export default function Story() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
      <section id="story" className="story">
        <div className="story-container">
            {/* Left side: image */}
          <div className="story-gallery">
            <button className="prev" onClick={prevImage}>❮</button>
            <img src={images[currentImageIndex]} alt="Our story" />
            <button className="next" onClick={nextImage}>❯</button>
          </div>
          {/* Right side: text */}
          <div className="story-text">
            <h2>Como nos Conhecemos</h2>
            <p>
              We first crossed paths in 2018, when a chance encounter turned into
              something unforgettable. From late-night conversations to countless
              adventures, our bond grew stronger with each passing day.
            </p>
  
            <h2>Como foi o Pedido</h2>
            <p>
              In 2024, surrounded by love and laughter, the proposal marked the
              beginning of our forever. It was one of the most magical days of our
              lives, and we can’t wait to celebrate this next chapter with all of
              you.
            </p>
          </div>
        </div>
      </section>
    );
  }
  