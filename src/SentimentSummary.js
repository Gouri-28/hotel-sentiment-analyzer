// SentimentSummary.js
import React from 'react';

function SentimentSummary({ reviews }) {
  const counts = { positive: 0, negative: 0, neutral: 0 };

  reviews.forEach(({ sentiment }) => {
    if (sentiment === 'positive') counts.positive++;
    else if (sentiment === 'negative') counts.negative++;
    else counts.neutral++;
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', margin: '20px 0' }}>
      <div style={{
        backgroundColor: '#d0f0fd',
        padding: '1rem 2rem',
        borderRadius: '12px',
        color: '#0288d1',
        fontWeight: '600',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 4px 6px rgba(2,136,209,0.2)'
      }}>
        <span role="img" aria-label="positive">😊</span> Positive: {counts.positive}
      </div>
      <div style={{
        backgroundColor: '#fde0dc',
        padding: '1rem 2rem',
        borderRadius: '12px',
        color: '#d32f2f',
        fontWeight: '600',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 4px 6px rgba(211,47,47,0.2)'
      }}>
        <span role="img" aria-label="negative">😞</span> Negative: {counts.negative}
      </div>
      <div style={{
        backgroundColor: '#e0e0e0',
        padding: '1rem 2rem',
        borderRadius: '12px',
        color: '#616161',
        fontWeight: '600',
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 4px 6px rgba(97,97,97,0.2)'
      }}>
        <span role="img" aria-label="neutral">😐</span> Neutral: {counts.neutral}
      </div>
    </div>
  );
}

export default SentimentSummary;
