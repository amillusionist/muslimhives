import { Inter } from 'next/font/google'
import Button from '../../components/button';
import Header from '../../components/header';
import Footer from "../../components/footer";
import Image from 'next/image';
import Head from 'next/head';
import './globals.css';
import '../../styles/style.css';
import '../../styles/about.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><Header />{children}<Footer /></body>
      
    </html>
  )
}
