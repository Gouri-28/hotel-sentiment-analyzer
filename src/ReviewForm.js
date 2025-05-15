import React, { useState } from "react";

export default function ReviewForm({ onAnalyze }) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!inputText.trim()) {
      setError("Please enter a hotel name or review text.");
      return;
    }
    setError("");
    onAnalyze(inputText);
    setInputText("");
  };

  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "2rem",
      width: "600px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      color: "#333",
      marginBottom: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}>
      <textarea
        rows={4}
        placeholder="Hotel Name | Review text (e.g. 'Day Inn | Good staff and service')"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: "1rem", borderRadius: "12px", fontSize: "1rem" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "1rem",
          fontSize: "1.2rem",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Analyze
      </button>
    </div>
  );
}
