import Home from "./components/Home";
import Form from "./components/Form";
import Excel from "./components/Excel";
import PieCharts from "./components/Pie";
import BarGraph from "./components/BarGraph";
import LineCharts from "./components/Line";
import DataVisualization from "./components/Visualize";
import AreaCharts from "./components/Area";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>
   
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/Excel" element={<Excel />} />
      <Route path="/visualize" element={<DataVisualization/>} />
      <Route path="/pie" element={<PieCharts />} />
      <Route path="/bar" element={<BarGraph />} />
      <Route path="/area" element={<AreaCharts />} />
      <Route path="/line" element={<LineCharts />} />
      
    </Routes>
  </Router>
  </>
  );
}

export default App;
