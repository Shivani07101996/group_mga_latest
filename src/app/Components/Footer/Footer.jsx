import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-section position-relative" style={{ minHeight: '400px', background: '#002061' }}>
            <div className="footer-widgets-wrapper style1 fix">
                
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-4 col-lg-4 col-md-10 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget h-full flex flex-col gap-4 justify-start items-start">
                                <div className="widget-head">
                                    <Link href="/">
                                        <img src="/assets/images/logo/logo_fresh.png" alt="PolicyAdvisor eXchange" width={280} height={50} />
                                    </Link>
                                </div>
                                <div className="footer-contact-info w-full">
                                    <div className="footer-address mb-4 flex items-center" style={{ color: '#fff', fontSize: '20px', fontWeight: 500 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px' }} className="lucide lucide-map-pin w-5 h-5 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        <span>2030 Bristol Circle, Oakville, Ontario L6H 0H2, Canada</span>
                                    </div>
                                    <div className="footer-contact-row flex items-center gap-6 mb-4" style={{ color: '#fff', fontSize: '20px', fontWeight: 500 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px' }} className="lucide lucide-mail w-5 h-5 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                        <span><a href="mailto:hello@policyadvisor.com" style={{ textDecoration: 'none', color: '#fff' }}>hello@policyadvisor.com</a></span>
                                    </div>
                                    <div className="footer-contact-row flex items-center gap-6" style={{ color: '#fff', fontSize: '20px', fontWeight: 500 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '12px' }} className="lucide lucide-phone w-5 h-5 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        <span><a href="tel:+16477978160" style={{ textDecoration: 'none', color: '#fff' }}>+1 (647) 797-8160</a></span>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div style={{ position: 'relative', left: '50%', width: '100vw', height: '1px', background: '#fff', opacity: 0.4, margin: '24px 0 0 0', transform: 'translateX(-50%)' }} />
            </div>
        </footer>
    );
};

export default Footer;