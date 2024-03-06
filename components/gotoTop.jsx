import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styles from '../src/styles/GoToTop.module.css'; // Create a CSS module file for styling

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={isVisible ? styles.goToTopButton : styles.goToTopButtonHidden} onClick={scrollToTop} id="deskk">
            <FaArrowCircleUp className={styles.icon} />
        </div>
    );
};

export default GoToTop;
