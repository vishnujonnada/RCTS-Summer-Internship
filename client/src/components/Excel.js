import React, { useState, useRef } from 'react';
import '../css/Excel.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Excel = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();

    // Create a FormData object
    const formData = new FormData();
    formData.append('file', file);

    // Make an API call to upload the file
    fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        toast.success('Upload Successful');
        alert('Upload successful');
        // Display success notification
        navigate('/visualize');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className='navbor'>
        <div className="form-container">
          <div className="upload-page">
            <h3>Upload Excel Sheet</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="excel-file">Select Excel File:</label>
                <input
                  type="file"
                  id="excel-file"
                  accept=".xlsx, .xls"
                  onChange={handleFileChange}
                />
              </div>
              <button type="submit">Upload</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Container for displaying notifications */}
    </div>
  );
};

export default Excel;
