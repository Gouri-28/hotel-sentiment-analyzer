import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import BestHotelSuggestion from "./BestHotelSuggestion";

export default function App() {
  const [history, setHistory] = useState([]);
  const [bestHotel, setBestHotel] = useState(null);

  const analyzeSentimentText = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("good") || lower.includes("excellent") || lower.includes("great")) {
      return "Positive";
    } else if (lower.includes("bad") || lower.includes("terrible") || lower.includes("poor") || lower.includes("worst")) {
      return "Negative";
    }
    return "Neutral";
  };

  const handleAnalyze = (inputText) => {
    let hotelName = "Unknown Hotel";
    let reviewText = inputText;

    if (inputText.includes("|")) {
      const parts = inputText.split("|");
      hotelName = parts[0].trim();
      reviewText = parts[1].trim();
    }

    const sentiment = analyzeSentimentText(reviewText);

    // For now destination unknown, user can input later
    setHistory((prev) => [
      ...prev,
      { hotelName, reviewText, sentiment, destination: "Unknown" },
    ]);
  };

  const handleSuggest = (destination) => {
    if (!destination.trim()) {
      setBestHotel("Please enter a destination.");
      return;
    }

    const filtered = history.filter(
      (item) => item.destination.toLowerCase() === destination.trim().toLowerCase()
    );

    if (filtered.length === 0) {
      setBestHotel("No reviews for this destination yet.");
      return;
    }

    const hotelScores = {};
    filtered.forEach(({ hotelName, sentiment }) => {
      if (!hotelScores[hotelName]) hotelScores[hotelName] = 0;
      if (sentiment === "Positive") hotelScores[hotelName]++;
      else if (sentiment === "Negative") hotelScores[hotelName]--;
    });

    const best = Object.entries(hotelScores).reduce(
      (max, curr) => (curr[1] > max[1] ? curr : max),
      ["No hotel found", -Infinity]
    );

    setBestHotel(best[0]);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontWeight: "900", fontSize: "3rem", marginBottom: "0.5rem" }}>
        Hotel Sentiment Analyzer
      </h1>
      <p style={{ maxWidth: "600px", marginBottom: "2rem", fontSize: "1.1rem", color: "#ddd", textAlign: "center" }}>
        Enter a hotel name and review separated by "|" (e.g. "Hotel ABC | great service"), and see sentiment analysis. Or just enter review text.
      </p>

      <ReviewForm onAnalyze={handleAnalyze} />
      <BestHotelSuggestion onSuggest={handleSuggest} bestHotel={bestHotel} />
      <ReviewList history={history} />
    </div>
  );
}
