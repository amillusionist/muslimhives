import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { menuOptions } from './menuOptions';
import Logo from '../public/logo.svg';
import '@/styles/style.css';
import '@/styles/header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className="logo">
        {/* Your Logo Image */}
        <Link href="/" className="logoContainer">
            <Image src={Logo} width={50} height={50} alt="Picture of the author"/>
            <div>
                Muslim HIVE
              <span> The Ummah Platform </span>
            </div>
        </Link>
      </div>

      <nav className="navbar">
        {/* Navigation Menu */}
        <ul>
          {menuOptions.map((option) => (
            <li key={option.id}>
              <Link href={option.path}>
              {option.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="auth-buttons">
        {/* Login and Signup Buttons */}
        <button>Login</button>
        <button className='sign-up'>Sign Up</button>
      </div>
    </header>
  );
}
