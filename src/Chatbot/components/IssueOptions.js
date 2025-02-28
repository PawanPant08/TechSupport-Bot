import React from "react";

const IssueOptions = ({ actions }) => {
  const options = [
    { text: "Slow Internet", handler: () => actions.handleTechSupport("Slow Internet") },
    { text: "Reset Password", handler: () => actions.handleTechSupport("Reset Password") },
    { text: "Computer Overheating", handler: () => actions.handleTechSupport("Computer Overheating") },
    { text: "Frozen Screen", handler: () => actions.handleTechSupport("Frozen Screen") },
    { text: "Install Updates", handler: () => actions.handleTechSupport("Install Updates") },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={option.handler}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default IssueOptions;
