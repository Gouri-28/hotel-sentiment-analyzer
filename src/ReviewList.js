import React from "react";

export default function ReviewList({ history }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "2rem",
      width: "600px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      color: "#333",
    }}>
      <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Review History</h2>
      {history.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No reviews analyzed yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, maxHeight: "300px", overflowY: "auto" }}>
          {history.map(({ hotelName, reviewText, sentiment, destination }, idx) => (
            <li
              key={idx}
              style={{
                padding: "0.75rem",
                marginBottom: "0.5rem",
                borderRadius: "12px",
                backgroundColor:
                  sentiment === "Positive"
                    ? "#d4edda"
                    : sentiment === "Negative"
                    ? "#f8d7da"
                    : "#fff3cd",
                color:
                  sentiment === "Positive"
                    ? "#155724"
                    : sentiment === "Negative"
                    ? "#721c24"
                    : "#856404",
                fontWeight: "600",
              }}
            >
              <strong>{hotelName}</strong> ({destination})<br />
              Review: {reviewText}<br />
              Sentiment: {sentiment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
