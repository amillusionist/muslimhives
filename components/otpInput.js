// OTPInput.js

import React, { useState, useRef } from 'react';

const OTPInput = ({ onChange }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (index === otp.length - 1 && value !== '') {
      inputs.current[index].blur(); // Auto focus to the next input field
    }
    onChange(newOTP.join(''));
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move focus to the previous input field on backspace
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className='flex space-between p-10'>
      {otp.map((digit, index) => (
        <input
        className='inOtp'
        placeholder='X'
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
