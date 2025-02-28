import React from "react";

const VideoLink = ({ videoUrl }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" style={{ 
          color: "blue", 
          fontWeight: "bold", 
          textDecoration: "underline",
          fontSize: "16px"
        }}>
        ▶️ Watch Tutorial
      </a>
    </div>
  );
};

export default VideoLink;
