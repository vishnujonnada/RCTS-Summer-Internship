import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, Label } from 'recharts';
import '../css/pie.css'
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const PieCharts = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/data');
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderCharts = () => {
    if (!chartData) {
      return <p>Loading data...</p>;
    }
    const keys = Object.keys(chartData);
    const colorScale = scaleOrdinal().range(schemeCategory10.slice(0, keys.length)).domain(keys);

    return Object.entries(chartData).map(([key, value]) => {
      const pieChartData = Object.entries(value).map(([subKey, subValue]) => ({
        name: subKey,
        value: subValue,
      }));

      const COLORS = pieChartData.map((entry) => colorScale(entry.name));

      return (
        <>


        
        <div key={key} className="chart-container">
         
          <h2>{key}</h2>
          <div className='piee'>
          <PieChart width={500} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              // label={({ name, value }) => `${name}`}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label position="center" fontSize={0} value="Total" />
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
        </div>
        
        </>
      );
    });
  };

  return (
    <div className="total_box">
      {renderCharts()}
    </div>
  );
};

export default PieCharts;
