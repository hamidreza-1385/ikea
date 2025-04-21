import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ColorSlider = () => {
  const [position, setPosition] = useState(50);

  const handleDrag = (e) => {
    const newX = e.clientX - e.target.parentElement.getBoundingClientRect().left;
    const width = e.target.parentElement.offsetWidth;
    const newPos = Math.max(0, Math.min(newX, width));
    setPosition((newPos / width) * 100);
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="position-relative w-100" style={{ maxWidth: "600px", height: "20px", borderRadius: "10px", overflow: "hidden", border: "1px solid #ccc" }}>
        <div
          className="position-absolute top-0 start-0 h-100"
          style={{ width: `${position}%`, backgroundColor: "#d3d3d3" }}
        ></div>
        <div
          className="position-absolute top-0 end-0 h-100 bg-danger"
          style={{ width: `${100 - position}%` }}
        ></div>
        <div
          className="position-absolute top-50 translate-middle bg-white border border-dark rounded-circle"
          style={{ width: "20px", height: "20px", left: `calc(${position}% - 10px)`, cursor: "pointer" }}
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleDrag);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleDrag);
            });
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorSlider;