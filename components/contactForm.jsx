import React from 'react';
import Link from 'next/link';

const ContactForm = ()=>{
    return(
        <div className='p-60'>
            <form className="container col" action="">
                <div className='form-fields-1'>
                    <input className="form-input" type="text" name="" id=""/>
                    <label className='form-lable-1' htmlFor="name">Name</label>
                </div>
                <div className='form-fields-1'>
                    <input className="form-input" type="email" name="" id=""/>
                    <label className='form-lable-1' htmlFor="name">Email</label>
                </div>
                <div className='form-fields-1'>
                    <input className="form-input" type="text" name="" id="" />
                    <label className='form-lable-1' htmlFor="name">Phone Number</label>
                </div>
                <div className='form-fields-1'>
                    <textarea className="form-input" name="" id="" cols="30" rows="5" ></textarea>
                    <label className='form-lable-1' htmlFor="query">Query</label>
                </div>
                <button className='form-button' >Submit</button>
            </form>
        </div>
    );
}
export default ContactForm;