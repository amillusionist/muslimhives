'use client';
import React from 'react'
import Link from 'next/link';
import '../styles/style.css'

export default function thankYou(){
    return(
    <>
        <div className='thankyouPage'>
            <h1>
                Thank You
            </h1>
            <p>We will Get in touch with you Soon</p>
            <p>if you have any query please reach out us at <Link href="mailto:info@muslimhive.com">info@muslimhive.com</Link></p>
        </div>
    </>
    );
}