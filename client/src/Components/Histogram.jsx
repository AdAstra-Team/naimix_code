import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
const data = [
  "Уровень коммуникации",
  "Уровень совпадения корп. культуры",
  "Уровень совпадения корп. культуры",
  "Уровень инициативности"
].map((number, index) => ({
  number,
  level: Math.floor(Math.random() * 11), 
  color: ['#8884d8', '#82ca9d', '#ffc658', '#0088FE'][index % 4]
}));

const Histogram = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="number" label={{ value: 'Метрики', position: 'insideBottom', offset: -10 }} />
        <YAxis label={{ value: 'Уровень метрик', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="level" isAnimationActive={true}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Histogram;
