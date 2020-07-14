import React, { useRef, useEffect } from "react";
import "./App.scss";

import images from "./images/images";

function App() {
  //REF
  const app = useRef();
  const scrollContainer = useRef();

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        {images.map((image, index) => (
          <>
            <div key={index} className="img-container">
              <img src={image} alt={`people ${index}`} />
            </div>
            <h2>
              Skew <span className="outline">scroll</span>
            </h2>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
