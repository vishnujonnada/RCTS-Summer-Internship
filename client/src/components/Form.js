import React, { useState } from 'react';
import '../css/Form.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
    favoritecar: '',
    favoritebike: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithIntAge = {
        ...formData,
        age: parseInt(formData.age)
      };

      await fetch('http://127.0.0.1:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataWithIntAge)
      });

      // Form data successfully sent to the backend
      console.log('Form data submitted successfully!');
      setFormData({
        name: '',
        age: '',
        country: '',
        favoritecar: '',
        favoritebike: ''
      });
      toast.success('Data Saved'); // Display success notification
    } catch (error) {
      // Handle error
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <>
   
      <div className='navbor'>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </label>
            <label>
            Country:
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="UK">UK</option>
              <option value="Austraila">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Favorite Car:
            <select
              name="favoritecar"
              value={formData.favoritecar}
              onChange={handleChange}
              required
            >
              <option value="">Select a car</option>
              <option value="Toyota">Toyota</option>
              <option value="Tata Tiago">Tata Tiago</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="BMW">BMW</option>
              <option value="Reanult kiger">Reanult kiger</option>
              <option value="Benz">Benz</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Favorite Bike:
            <select
              name="favoritebike"
              value={formData.favoritebike}
              onChange={handleChange}
              required
            >
              <option value="">Select a Bike</option>
              <option value="Royal Enfield. Hunter 350">Royal Enfield. Hunter 350</option>
              <option value="Toyota">Tata T5</option>
              <option value="HonHonda. SP 125.da">Honda. SP 125.</option>
              <option value="Yamaha. MT 15 V2">Yamaha. MT 15 V2</option>
              <option value="TVS. Raider 125">TVS. Raider 125</option>
              <option value="Honda. Activa 6G">Honda. Activa 6G</option>
              <option value="Royal Enfield. Classic 350.">Royal Enfield. Classic 350.</option>
              <option value="Kawasaki Ninja H2R">Kawasaki Ninja H2R</option>
              <option value="Other">Other</option>

            </select>
          </label>
            {/* Rest of the form inputs */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Container for displaying notifications */}
    </>
  );
};

export default Form;
