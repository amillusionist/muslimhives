import { useState } from 'react';
import Link from 'next/link';
import OTPInput from '../../../components/otpInput'
const Page1 = ({ onNext }) => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (value) => {
    setOTP(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with OTP
    console.log('Submitted OTP:', otp);
  }
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
      <h2>Registration</h2>
      <div className="sign-up-form">
        <div className='form-fields-1'>
          <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} required/>   
          <label className='form-lable-1'>Name</label>
        </div>
        <div className='form-fields-1'>
          
          <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required/> 
          <label className='form-lable-1'>Email</label>
          <Link className="get-otp" href="#">Get Otp</Link>

        </div> 
        <div className='form-fields-1 flex col gap-10'>
          
          <input className="form-input" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required/> 
          <label className='form-lable-1'>Phone Number</label>
          <Link className="get-otp" href="#">Get Otp</Link>
          <OTPInput onChange={handleOTPChange} />
          

        </div>
        <div className='form-fields-1'>
          
          <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} required/>  
          <label className='form-lable-1'>Password</label>   
        </div>
        <div className='form-fields-1'>
          
          <input className="form-input" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required/> 
          <label className='form-lable-1'> Confirm Password</label>    
        </div>
        <button onClick={handleNext} className='form-button'>Next</button>
       </div>
    </>
  );
};

export default Page1;