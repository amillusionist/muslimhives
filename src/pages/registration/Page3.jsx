import { useState } from 'react';

const Page3= ({ onNext , onBack}) => {
  const [formData, setFormData] = useState({
    businessLocation: '',
    businessAdress: '',
    pincode:'',
    state:'',
    city:'',
    country:''
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    onBack(formData);
  }

  const handleSubmit = () => {
    if(formData.businessAdress === '' || formData.businessLocation === ''){
      alert('fields cant be empty');
      return;
    }
    onNext(formData);
  };

  return (
    <>
    <h2>Add Business</h2>
    <div className="sign-up-form">
      <div>
        <label>Business Location</label>
        <input type="text" name="businessLocation" value={formData.businessLocation} onChange={handleChange} />   
      </div>
      <div>
        <label>Business Address</label>
        <input type="text" name="businessAdress" value={formData.businessAdress} onChange={handleChange} /> 
      </div> 
      <div className='button-div'> 
        <button onClick={handleBack} className='form-button'>Back</button>
        <button onClick={handleSubmit} className='form-button'>Submit</button>
      </div>
     </div>
  </>
  );
};

export default Page3;