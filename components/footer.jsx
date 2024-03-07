import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { footerLinksOptions1, footerLinksOptions2, footerSocialLinks, footerExtraLinks } from './menuOptions';
import Logo from '/public/logo.svg';

export default function Footer() {
    return (
        <footer className="container col max-width">
            <div className='footer-div-1 gap-80'>
                <div className='footer-div-1-logo width-40 flex-col'>
                    <Link href="/" className="logoContainer">
                        <Image src={Logo} width={50} height={50} alt="Picture of the author" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='footer-div-1-links-1 flex-col width-15 '>
                    <h4>Links</h4>
                    <ul className='flex-col '>
                        {footerLinksOptions1.map((option) => (
                            <li key={option.id} className='li-none'>
                                <Link href={option.path}>
                                    {option.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='footer-div-1-links-1 flex-col width-15'>
                    <h4>Links</h4>
                    <ul className='flex-col'>
                        {footerLinksOptions2.map((option) => (
                            <li key={option.id} className='li-none'>
                                <Link href={option.path}>
                                    {option.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='footer-div-1-social-links flex-col width-30'>
                    <h4>Social Links</h4>
                    <ul>
                        {footerSocialLinks.map((option) => (
                            <li key={option.id} className='li-none'>
                                <Link href={option.socialUrl}>
                                    <Image src={option.imgUrl}>
                                    </Image>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container row width-100">
                <div className='width-50'><p>© 2022 Business Registration Website. All rights reserved.</p></div>
                <div className="width-50">
                    <div>
                        <ul className="flex flex-right">
                        {footerExtraLinks.map((option) => (
                            <li key={option.id} className='li-none'>
                                <Link href={option.Url}>
                                {option.name}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}