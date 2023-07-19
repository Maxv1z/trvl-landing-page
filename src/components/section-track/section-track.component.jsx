import React, { useEffect } from "react";
import "./section-track.style.scss";

const SectionTrack = ({ activeSection }) => {
  useEffect(() => {
    console.log("Active Section in SectionTrack:", activeSection);
  }, [activeSection]);

  return (
    <div className="track-container">
      <div className="sidebar">
        {[0, 1, 2, 3].map((section) => (
          <div
            key={section}
            className={`counter ${activeSection === section ? "active" : ""} ${
              section === 0 ? "start" : ""
            }`}
          >
            <h1>{section === 0 ? "Start" : "0" + section}</h1>
          </div>
        ))}
      </div>
      <div className="stick">
        <div className="stick-segment" style={{ height: `${25 + 25 * activeSection}%` }}></div>
      </div>
    </div>
  );
};

export default SectionTrack;
