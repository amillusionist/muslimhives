import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Image from 'next/image';

const ModalBoxWide = () => {
    const [isContent1Visible, setIsContent1Visible] = useState(true);
  const [isContent2Visible, setIsContent2Visible] = useState(false);

  const toggleVisibility = () => {
    setIsContent1Visible(!isContent1Visible);
    setIsContent2Visible(!isContent2Visible);
  };

    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        business_name: '',
        phone_number: '',
        email: '',
        category: '',
        address: '',
        city: '',
        state: '',
        landmark: '',
        pincode: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        // Validation check
        const requiredFields = ['name', 'business_name', 'phone_number', 'email', 'category', 'address', 'city', 'state', 'landmark', 'pincode'];
        const isAnyFieldEmpty = requiredFields.some(field => !formData[field]);

        if (isAnyFieldEmpty) {
            alert('Please fill in all required fields');
            return;
        }

        // Perform your data submission logic here, using formData
        const formDataObject = {
            name: formData.name,
            business_name: formData.business_name,
            phone_number: formData.phone_number,
            email: formData.email,
            category: formData.category,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            landmark: formData.landmark,
            pincode: formData.pincode,
        };

        console.log('Submitting data to the database:', formDataObject);

        try {
            // Send a POST request to the server
            const response = await fetch('https://muslimhive.com/server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Server response:', data);

            // Check if the server response indicates success
            if (data.status === 'success') {
                // Redirect to another page
                router.push("/thankYou");
            }
        } catch (error) {
            // Handle errors during the fetch
            console.error('Error during fetch:', error.message);
        }
    };

    return (
        <>
            <section className='ypf-section-full'>
                <section className="ypf-section">
                    <div className='ypf-loginOpen'>
                        <h1 className='h1heading'>Hi There</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ypw-bd-button" disabled="disabled">SIGN IN</button>
                    </div>
                    <div className='ypf-registrationBox'>
                        <div className='width-100'>
                            <h2 className='ypf-registrationBox-h2'>Create Account</h2>
                            <div className='login-icon-box'>
                                <Image
                                    src="/Google.svg"
                                    width={36}
                                    height={36}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/Facebook.svg"
                                    width={36}
                                    height={36}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/Whatsapp.svg"
                                    width={36}
                                    height={36}
                                    alt="Picture of the author"
                                />
                            </div>
                            <form className='ypf-registrationBox-form' onSubmit={submitForm}>
                            {isContent1Visible && 
                            <div className='ypf-step-form step-1'>
                            <div className='input-fields'>
                                    <input type="text" name="name" id="name" placeholder='john Doe' value={formData.name} onChange={handleInputChange} required />
                                </div>
                                <div className='input-fields'>
                                    <input type="text" name="business_name" id="business_name" placeholder='Business Name' value={formData.business_name} onChange={handleInputChange} required />
                                </div>
                                <div className='input-fields'>
                                    <input type="text" name="phone_number" id="phone_number" placeholder='Phone Number' value={formData.phone_number} onChange={handleInputChange} required />
                                </div>
                                <div className='input-fields'>
                                    <input type="email" name="email" id="email" placeholder='Email' value={formData.email} onChange={handleInputChange} required />
                                </div>
                                <div className='input-fields'>
                                    <select name="category" id="category" value={formData.category} onChange={handleInputChange} required>
                                        <option> Select</option>
                                        <option value="Businesses & Services">Businesses & Services</option>
                                        <option value="Educational Institute">Educational Institute</option>
                                        <option value="Hijamah Centers">Hijamah Centers</option>
                                        <option value="Islamic Banking & Finance">Islamic Banking & Finance</option>
                                        <option value="Hospitals & Clinics">Hospitals & Clinics</option>
                                        <option value="Ruqyah Centers">Ruqyah Centers</option>
                                        <option value="Restaurants Hotels">Restaurants Hotels</option>
                                        <option value="NGO's">NGO's</option>
                                        <option value="Islamic Centers">Islamic Centers</option>
                                        <option value="Hajj & Umrah Travels">Hajj & Umrah Travels</option>
                                        <option value="Masjids">Masjids</option>
                                    </select>
                                </div>
                                <button className="reg-button" type="button" onClick={toggleVisibility}>Next</button>
                                </div>}

                                {isContent2Visible && 
                                <div className='ypf-step-form step-2'>
                                <div className='input-fields'>
                                    <textarea rows="1" name="address" id="address" placeholder='Address' value={formData.address} onChange={handleInputChange} required></textarea>
                                </div>
                                <div className='input-fields'>
                                    <input type="text" name="state" id="state" placeholder='State' value={formData.state} onChange={handleInputChange} required />
                                </div>
                                <div className='input-fields'>
                                    <input type="text" name="city" id="city" placeholder='City' value={formData.city} onChange={handleInputChange} required />
                                </div>
                                <div className='input-fields'>
                                    <input type="text" name="landmark" id="landmark" placeholder='Landmark' value={formData.landmark} onChange={handleInputChange} required />
                                </div>
                                <div className='input-fields'>
                                    <input type="text" name="pincode" id="pincode" placeholder='Pincode' value={formData.pincode} onChange={handleInputChange} required />
                                </div>
                                <div className='btn-group'>
                                <button className="reg-button" type="button" onClick={toggleVisibility}>Prev</button>
                                    <button className="reg-button" type="submit">SIGN UP</button>
                                </div>                                  

                                </div>}
                                
                            </form>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default ModalBoxWide;
