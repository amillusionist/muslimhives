import { useState } from 'react';

const Page2 = ({ onNext , onBack}) => {
  const [formData, setFormData] = useState({
    GST:'',
    businessCategory:'',
    businessName:'',
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

  const handleNext = () => {

    if(formData.GST === '' || formData.businessCategory === '' || formData.businessName == ''){
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
        <label>GST</label>
        <input type="text" name="GST" value={formData.GST} onChange={handleChange} />   
      </div>
      <div>
        <label>Business Category</label>
        <input type="text" name="businessCategory" value={formData.businessCategory} onChange={handleChange} /> 
      </div> 
      <div>
        <label>Business Name</label>
        <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} />     
      </div>
      <div className='button-div'> 
        <button onClick={handleBack} className='form-button'>Back</button>
        <button onClick={handleNext} className='form-button'>Next</button>
      </div>
     </div>
  </>
  );
};

export default Page2;