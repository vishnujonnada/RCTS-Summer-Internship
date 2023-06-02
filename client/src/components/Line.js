import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
// import './styles/linechart.css';

const LineCharts = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/data'); // Replace 'API_URL' with your actual API endpoint
      const data = await response.json();
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
      const lineData = Object.entries(chartData[key]).map(([subKey, subValue]) => ({
        name: subKey,
        value: subValue,
      }));
  
      const COLORS = lineData.map((entry) => colorScale(entry.name));
  
      return (
        <div key={key} className="chart-container">
          <h2>{key}</h2>
          <LineChart width={400} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke={COLORS[0]} // Assuming only one line for each category
            />
          </LineChart>
        </div>
      );
    });
  };
  

  return <div className="total_box">{renderChart()}</div>;
};

export default LineCharts;
