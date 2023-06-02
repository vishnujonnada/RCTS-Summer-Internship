import React from 'react';
// import NavBar from './Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DataVisualization = () => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/${id}`);
      };
      
  return (
    <>
     
    <div>
    <div className='navbor'>
      <h1 style={{ textAlign: 'center' }}>Visualize your Data as</h1>
      <div style={{ display: 'flex', justifyContent: 'center' ,marginLeft:'170px',marginRight:'170px',marginTop:'10px'}}>
     
        <div
          style={{
            backgroundColor: 'lightgray',
            flex: 1,
            width: '120px',
            height: '170px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border:'2px solid black',
            borderRadius:'10px'
          }}
       
          onClick={() => handleClick('bar')}
         
        >
          <span>Bar Graph</span>
         
        </div>
        <div
          style={{
            backgroundColor: 'lightgray',
            flex: 1,
            width: '120px',
            height: '170px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border:'2px solid black',
            borderRadius:'10px'
          }}
          onClick={() => handleClick('pie')}
        >
          <span>Pie Chart</span>
        </div>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' ,marginLeft:'170px',marginRight:'170px',marginTop:'10px',marginBottom:'10px'}}>
       
        <div
          style={{
            backgroundColor: 'lightgray',
            flex: 1,
            width: '120px',
            height: '170px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border:'2px solid black',
            borderRadius:'10px'
          }}
          onClick={() => handleClick('area')}
        >
          <span>Area Chart</span>
        </div>
        <div
          style={{
            backgroundColor: 'lightgray',
            flex: 1,
            width: '120px',
            height: '170px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border:'2px solid black',
            borderRadius:'10px'
          }}
          onClick={() => handleClick('line')}
        >
          <span>Line Chart</span>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default DataVisualization;
