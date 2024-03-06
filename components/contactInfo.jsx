import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './button'
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoCall } from "react-icons/io5";
export default function ContactInfo(){
    return(
        <section>
            <div className='container gap-20 maxW space-between'>
                <div className='flex col mhContactInfoBox center gap-20 width-30'>
                    <div>
                    <FaEnvelope />
                    </div>
                    <div className='flex col gap-5'>
                    <h4>developer@muslimHives.com</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <Button link="#" type="button" label="Send" color="button primary-button" />
                </div>
                <div className='flex col mhContactInfoBox center gap-20 width-30'>
                    <div>
                    <MdOutlineSupportAgent />
                    </div>
                    <div  className='flex col gap-5'>
                    <h4>24/7 Support</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <Button link="#" type="button" label="Open Ticket" color="button primary-button" />
                </div>
                <div className='flex col mhContactInfoBox center gap-20 width-30'>
                    <div>
                    <IoCall />
                    </div>
                    <div  className='flex col gap-5'>
                    <h4>+91 7065xxxx30</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <Button link="#" type="button" label="Call" color="button primary-button" />
                </div>
            </div>
        </section>
    );
}