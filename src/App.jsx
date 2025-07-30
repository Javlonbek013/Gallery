
import { useState } from "react";
import "./index.css";

function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const fetchRandomImage = () => {
    const url = `https://picsum.photos/600/400?random=${Date.now()}`;
    setImages(prev => [...prev, url]);
    setCurrentIndex(prev => prev + 1);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="app">
      <h1 className="title">
        <span className="emoji">📸</span> Random Gallery App
      </h1>
      <div className="gallery-container">
        {currentIndex >= 0 ? (
          <img src={images[currentIndex]} alt="Random" className="gallery-image" />
        ) : (
          <span className="gallery-placeholder">Boshlash uchun Next bosing</span>
        )}
      </div>
      <div className="button-group">
        <button
          onClick={handleUndo}
          disabled={currentIndex <= 0}
          className="button button-undo"
        >
          Undo
        </button>
        <button
          onClick={fetchRandomImage}
          className="button button-next"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
