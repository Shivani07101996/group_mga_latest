"use client"
import Link from "next/link";
import ClientOnly from "../Common/ClientOnly";

const features = [
  { 
    title: 'Professional website development',
    content: 'Custom broker websites that convert visitors into qualified leads. Mobile-optimized and designed for insurance professionals.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#8B4CF6" fillOpacity="0.1"/>
        <path d="M12 14C12 12.8954 12.8954 12 14 12H34C35.1046 12 36 12.8954 36 14V30C36 31.1046 35.1046 32 34 32H14C12.8954 32 12 31.1046 12 30V14Z" stroke="#8B4CF6" strokeWidth="2"/>
        <path d="M12 18H36" stroke="#8B4CF6" strokeWidth="2"/>
        <circle cx="15" cy="15" r="1" fill="#8B4CF6"/>
        <circle cx="18" cy="15" r="1" fill="#8B4CF6"/>
        <circle cx="21" cy="15" r="1" fill="#8B4CF6"/>
        <path d="M16 24H32M16 28H28" stroke="#8B4CF6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 36L28 36" stroke="#8B4CF6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    title: 'Content marketing & blog writing',
    content: 'Compelling blogs and SEO content that position you as the go-to group benefits expert in your market.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#8B4CF6" fillOpacity="0.1"/>
        <path d="M14 12C12.8954 12 12 12.8954 12 14V34C12 35.1046 12.8954 36 14 36H34C35.1046 36 36 35.1046 36 34V14C36 12.8954 35.1046 12 34 12H14Z" stroke="#8B4CF6" strokeWidth="2"/>
        <path d="M16 18H32M16 22H32M16 26H28M16 30H24" stroke="#8B4CF6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 28L32 32L28 36" stroke="#8B4CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: 'Performance marketing campaigns',
    content: 'Targeted Google Ads, Facebook campaigns, and LinkedIn lead generation that brings qualified prospects to your door.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#8B4CF6" fillOpacity="0.1"/>
        <path d="M24 12L28 20H36L30 26L32 34L24 30L16 34L18 26L12 20H20L24 12Z" stroke="#8B4CF6" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="4" stroke="#8B4CF6" strokeWidth="2"/>
        <path d="M33 15L35 17M35 17L37 19M35 17L33 19M35 17L37 15" stroke="#8B4CF6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
]

const FeatureGrid = ({ features, title }) => {
  return (
    <section className="feature-section section-padding fix">
      <div className="container">
        <div className="feature-wrapper style1">
          <div className="section-title text-center mb-60">
            
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">{title}</h2>
          </div>
          
          <div className="row gy-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="feature-card wow fadeInUp"
                  data-wow-delay={`.${2 + index * 2}s`}
                  style={{
                    padding: '40px 30px',
                    borderRadius: '20px',
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#FFFFFF',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 76, 246, 0.15)';
                    e.currentTarget.style.borderColor = '#8B4CF6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }}
                >
                  <div>
                    <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                      {feature.icon}
                    </div>
                    
                    <h4 style={{ 
                      fontSize: '20px', 
                      fontWeight: '700', 
                      marginBottom: '16px',
                      color: '#1F2937',
                      lineHeight: '1.3'
                    }}>
                      {feature.title}
                    </h4>
                    
                    <p style={{ 
                      fontSize: '16px', 
                      color: '#6B7280', 
                      lineHeight: '1.6',
                      margin: '0'
                    }}>
                      {feature.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-30">
            <Link className="theme-btn wow fadeInUp" data-wow-delay=".6s" href="/contact">
              Start Free Trial
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_91_29)">
                  <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_91_29">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Feature2() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      <FeatureGrid 
        features={features}
        title="Our marketing services will help you grow your brokerage"
      />
    </ClientOnly>
  );
}