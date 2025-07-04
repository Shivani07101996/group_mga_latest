import Link from "next/link";

const Cta1 = ({subtitle,title,content,btnurl1,btnurl2,img,onBtn1Click,onBtn2Click}) => {
    return (
        <section className="cta-section">
            <div className="cta-container-wrapper style1">
                <div className="container">
                    <div className="cta-wrapper style1  section-padding fix">
                        <div className="shape1 d-none d-xxl-block"><img src="/assets/images/shape/ctaShape1_1.png" alt="img" width={373} height={147} />
                        </div>
                        <div className="shape2 d-none d-xxl-block"><img src="/assets/images/shape/ctaShape1_2.png" alt="img" width={228} height={143} />
                        </div>
                        <div className="shape3 d-none d-xxl-block"><img src="/assets/images/shape/ctaShape1_3.png" alt="img" width={606} height={272} />
                        </div>
                        <div className="shape4 d-none d-xxl-block"><img src="/assets/images/shape/ctaShape1_4.png" alt="img" width={223} height={134} />
                        </div>
                        <div className="container">
                            <div className="row gy-5">
                                <div className="col-xl-12">
                                    <div className="cta-content">
                                        <div className="section-title">
                                            
                                            <h2 className="title text-white wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                            <p className="section-desc text-white mxw-651 wow fadeInUp" data-wow-delay=".6s">
                                                {content}</p>
                                        </div>
                                        <div className="cta-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                            <button className="theme-btn" onClick={onBtn1Click || (() => {})} style={{ 
                                                display: 'inline-flex', 
                                                alignItems: 'center', 
                                                gap: '8px',
                                                backgroundColor: '#fff',
                                                color: 'rgb(216, 22, 113)',
                                                padding: '15px 30px',
                                                borderRadius: '50px',
                                                fontWeight: '600',
                                                border: 'none',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Get Started Free
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_91_29)">
                                                        <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="currentColor" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_91_29">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                        </button>
                                            <button onClick={onBtn2Click || (() => {})} style={{ 
                                                display: 'inline-flex', 
                                                alignItems: 'center', 
                                                gap: '8px',
                                                border: '2px solid #fff',
                                                backgroundColor: 'transparent',
                                                color: '#fff',
                                                padding: '13px 30px',
                                                borderRadius: '50px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                See How It Works
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta1;