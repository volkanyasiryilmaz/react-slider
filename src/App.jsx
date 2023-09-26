import React, { useState, useEffect } from "react";

function App() {
  const images = [
    "../public/slide-web01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div className="main" style={backgroundImageStyle}>
      <button onClick={prevSlide} className="prev-button">
        <svg
          width="49"
          height="73"
          viewBox="0 0 49 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.18853 41.7697L38.3936 71.525C39.6243 72.529 41.2028 73.0044 42.7832 72.847C44.3637 72.6897 45.8175 71.9124 46.8261 70.6855C47.8347 69.4585 48.316 67.8819 48.1646 66.3008C48.0133 64.7198 47.2415 63.2631 46.0184 62.2499L15.3761 37.068L45.6724 11.471C46.8863 10.4426 47.6424 8.97439 47.7745 7.3889C47.9066 5.80341 47.404 4.23032 46.377 3.01518C45.35 1.80005 43.8827 1.04225 42.2974 0.908244C40.712 0.774243 39.1383 1.275 37.922 2.30052L2.1257 32.5469C1.45451 33.1154 0.916317 33.8244 0.549147 34.6238C0.181978 35.4231 -0.00521918 36.2933 0.000773241 37.173C0.00676567 38.0526 0.205801 38.9202 0.583827 39.7144C0.961853 40.5087 1.50965 41.2103 2.18853 41.7697Z"
            fill="black"
          />
        </svg>
      </button>
      <button onClick={nextSlide} className="next-button">
        <svg
          width="48"
          height="72"
          viewBox="0 0 48 72"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M45.8436 31.3876L9.84214 1.38631C8.61827 0.373955 7.04311 -0.112155 5.46158 0.0344271C3.88005 0.181009 2.42106 0.948338 1.4041 2.16838C0.387141 3.38842 -0.104906 4.96174 0.0357094 6.54381C0.176325 8.12587 0.938144 9.58775 2.15434 10.6093L32.6243 35.9993L2.15434 61.3893C0.933457 62.4094 0.167428 63.8725 0.0245266 65.457C-0.118375 67.0416 0.373539 68.6181 1.39221 69.8402C2.41088 71.0623 3.87299 71.83 5.45737 71.9748C7.04175 72.1196 8.61882 71.6296 9.84214 70.6124L45.8436 40.6106C46.5187 40.0466 47.0617 39.3413 47.4343 38.5445C47.8069 37.7477 48 36.8787 48 35.9991C48 35.1195 47.8069 34.2505 47.4343 33.4537C47.0617 32.6569 46.5187 31.9516 45.8436 31.3876Z" />
        </svg>
      </button>
        <div className="pagination">
        {images.map((image, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "dot active" : "dot"}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default App;
