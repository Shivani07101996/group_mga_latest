"use client"
import { useEffect } from 'react';

const WowInit = () => {
  useEffect(() => {
    // Initialize animations after component mount
    if (typeof window !== 'undefined') {
      // Add a delay to ensure DOM is ready and prevent hydration issues
      const timer = setTimeout(() => {
        // Fallback: Just add animation classes without WOW.js
        const animatedElements = document.querySelectorAll('.wow');
        animatedElements.forEach((element) => {
          if (element && !element.classList.contains('animate__animated')) {
            element.classList.add('animate__animated');
            // Add the appropriate animation class based on existing classes
            if (element.classList.contains('fadeInUp')) {
              element.classList.add('animate__fadeInUp');
            } else if (element.classList.contains('fadeInLeft')) {
              element.classList.add('animate__fadeInLeft');
            } else if (element.classList.contains('fadeInRight')) {
              element.classList.add('animate__fadeInRight');
            } else if (element.classList.contains('fadeInDown')) {
              element.classList.add('animate__fadeInDown');
            } else if (element.classList.contains('bounceInUp')) {
              element.classList.add('animate__bounceInUp');
            }
          }
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default WowInit; 