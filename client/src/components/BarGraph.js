import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

import '../css/BarGraph.css';

const BarGraph = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/data'); // Replace 'API_URL' with your actual API endpoint

      const data = await response.json();
      console.log(data)
      setChartData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const renderChart = () => {
    if (!chartData) {
      return <p>Loading data...</p>;
    }

    const keys = Object.keys(chartData);
    const colorScale = scaleOrdinal().range(schemeCategory10.slice(0, keys.length)).domain(keys);

    return keys.map((key) => {
      const barData = Object.entries(chartData[key]).map(([subKey, subValue]) => ({
        name: subKey,
        value: subValue,
      }));

      const COLORS = barData.map((entry) => colorScale(entry.name));

      return (
        <div key={key} className="chart-container box">
          
          <div className="chart">
          <h2>{key}</h2>
         
            <BarChart width={600} height={400} data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
            <div className="legend">
  {barData.map((entry, index) => (
    <div key={`legend-${index}`} className="legend-item">
      <div className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
      <div className="legend-name">{entry.name}</div>
    </div>
  ))}
</div>
          </div>
        </div>
      );
    });
  };

  return <div className="total_box">{renderChart()}</div>;
};

export default BarGraph;
