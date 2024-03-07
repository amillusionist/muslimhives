import { Inter } from 'next/font/google'
import Button from '/components/button';
import Footer from "/components/footer";
import Header from '/components/header';
import Image from 'next/image';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><Header />{children}<Footer /></body>
      
    </html>
  )
}
