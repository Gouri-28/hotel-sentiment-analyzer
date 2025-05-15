import React, { useState } from "react";

export default function BestHotelSuggestion({ onSuggest, bestHotel }) {
  const [destination, setDestination] = useState("");

  const handleClick = () => {
    onSuggest(destination);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "1rem 2rem",
          width: "600px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          color: "#333",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter destination for hotel suggestion"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ flex: 1, padding: "1rem", borderRadius: "12px", fontSize: "1rem" }}
        />
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "1rem 2rem",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Suggest Best Hotel
        </button>
      </div>

      {bestHotel && (
        <div
          style={{
            backgroundColor: "#fff3cd",
            color: "#856404",
            padding: "1rem 2rem",
            borderRadius: "12px",
            width: "600px",
            fontWeight: "700",
            fontSize: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          Best Hotel Suggestion: {bestHotel}
        </div>
      )}
    </>
  );
}
