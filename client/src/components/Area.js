import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../css/area.css'

const AreaCharts = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/data'); // Replace 'API_URL' with your actual API endpoint
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderChart = () => {
    if (loading) {
      return <p>Loading data...</p>;
    }

    return (
      <div className="chart-container">
        {Object.entries(data).map(([category, values], index) => (
          <div key={index} className="chart-wrapper">
            <h2>{category}</h2>
            <AreaChart width={400} height={300} data={Object.entries(values)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="0" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='total_box'>
      <h1>Area Chart</h1>
      {renderChart()}
    </div>
  );
};

export default AreaCharts;
