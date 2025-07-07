"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
export default function Header1({ variant, onBtnClick }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (currentScrollPos > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? 'cs-gescout_show cs-gescout_sticky' : ''}`}
      suppressHydrationWarning={true}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
            <Link className="cs_site_branding" href="/">
                  <img src="/assets/images/logo/Logo-New-.png" alt="PolicyAdvisor eXchange" width={280} height={50} />
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center">
                <div className="header-button ms-4 d-none d-lg-block">
                    <button type="button" className="theme-btn" onClick={onBtnClick || (() => {})}>
                        <span>
                            Get Started
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
      <div className={`search-wrap ${searchToggle ? 'active' : ''}`} >
      <div className="search-inner">
          <i onClick={() => setSearchToggle(!searchToggle)} id="search-close" className="bi bi-x-lg search-close"></i>
          <div className="search-cell">
              <form method="get">
                  <div className="search-field-holder">
                      <input type="search" className="main-search-input" placeholder="Search..." />
                  </div>
              </form>
          </div>
      </div>
      </div>

    </div>

  );
}
