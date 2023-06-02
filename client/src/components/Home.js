import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'

function Home() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    const selectedOption = document.getElementById('data').value;

    if (selectedOption === 'option1') {
      alert("select valid option")
    }else if(selectedOption==='option2'){
      navigate('/form');
    }else{
      navigate('/excel');
    }
  };
  return (
    <div>
     
      <div className='bor'>
      
      <h1 className="centered-heading">REDA-Representation Of Data</h1>

      {/* Data form */}
      <div className="data-form">
        <label htmlFor="data">Ingest Data Using:</label>
        <select id="data" name="data" className="custom-select">
          <option value="option1">select</option>
          <option value="option2">Form</option>
          <option value="option3">Excel</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      </div>
    </div>

  );
}

export default Home;
