import { useState } from 'react';

const Page2 = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    GST: '',
    businessCategory: '',
    businessName: '',
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

    if (formData.GST === '' || formData.businessCategory === '' || formData.businessName == '') {
      alert('fields cant be empty');
      return;
    }

    onNext(formData);
  };

  return (
    <>
      <h2>Add Business</h2>
      <div className="sign-up-form">
        <div className='form-fields-1'>
          <input className="form-input" type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
          <label className='form-lable-1'>Business Name</label>
        </div>

        <div className='form-fields-1'>
            <select className="form-input" name="category" id="category" required="">
              <option> Select</option>
              <option value="Businesses &amp; Services">Businesses &amp; Services</option>
              <option value="Educational Institute">Educational Institute</option>
              <option value="Hijamah Centers">Hijamah Centers</option>
              <option value="Islamic Banking &amp; Finance">Islamic Banking &amp; Finance</option>
              <option value="Hospitals &amp; Clinics">Hospitals &amp; Clinics</option>
              <option value="Ruqyah Centers">Ruqyah Centers</option>
              <option value="Restaurants Hotels">Restaurants Hotels</option>
              <option value="NGO's">NGO's</option><option value="Islamic Centers">Islamic Centers</option>
              <option value="Hajj &amp; Umrah Travels">Hajj &amp; Umrah Travels</option>
              <option value="Masjids">Masjids</option>
              </select>
            
          <label className='form-lable-1'>Business Category</label>
        </div>
        <div className='form-fields-1'>
          <input className="form-input" type="text" name="GST" value={formData.GST} onChange={handleChange} required />
          <label className='form-lable-1'>GST</label>
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