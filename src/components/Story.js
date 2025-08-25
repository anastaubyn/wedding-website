import "./Story.css";

export default function Story() {
    return (
      <section id="story" className="story">
        <div className="story-container">
          {/* Left side: text */}
          <div className="story-text">
            <h2>How We Met</h2>
            <p>
              We first crossed paths in 2018, when a chance encounter turned into
              something unforgettable. From late-night conversations to countless
              adventures, our bond grew stronger with each passing day.
            </p>
  
            <h2>How He Proposed</h2>
            <p>
              In 2024, surrounded by love and laughter, the proposal marked the
              beginning of our forever. It was one of the most magical days of our
              lives, and we can’t wait to celebrate this next chapter with all of
              you.
            </p>
          </div>
  
          {/* Right side: image */}
          <div className="story-image">
            <img src="/story-photo.jpg" alt="Our story" />
          </div>
        </div>
      </section>
    );
  }
  