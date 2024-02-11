import { useState } from 'react';

const Page1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    confirmPassword:''
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    //checks
    if(formData.name === '' || formData.email === '' || formData.password === '' || formData.confirmPassword === ''){
      alert('fields cant be empty');
      return;
    }

    if(formData.password !== formData.confirmPassword){
      alert('password and confirm password does not match');
      return;
    }

    onNext(formData);
  };

  return (
    <>
      <h2>Add Business</h2>
      <div className="sign-up-form">
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />   
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} /> 
        </div> 
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />     
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />     
        </div>
        <button onClick={handleNext} className='form-button'>Next</button>
       </div>
    </>
  );
};

export default Page1;