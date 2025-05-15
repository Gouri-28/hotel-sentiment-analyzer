import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function SentimentChart({ reviews }) {
  const data = [
    {
      name: 'Positive',
      value: reviews.filter((r) => r.sentiment === 'positive').length,
    },
    {
      name: 'Neutral',
      value: reviews.filter((r) => r.sentiment === 'neutral').length,
    },
    {
      name: 'Negative',
      value: reviews.filter((r) => r.sentiment === 'negative').length,
    },
  ];

  const COLORS = ['#22c55e', '#a3a3a3', '#ef4444'];

  return (
    <div className="mt-6 bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4">
        Sentiment Overview
      </h2>
      <PieChart width={350} height={250}>
        <Pie
          data={data}
          cx={160}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default SentimentChart;
