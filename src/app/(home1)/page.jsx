"use client";
import React, { useState, useEffect } from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Brand1 from '../Components/Brand/Brand1';
import About1 from '../Components/About/About1';
import HowWork from '../Components/HowWork/HowWork';
import Choose1 from '../Components/Choose/Choose1';
import Feature1 from '../Components/Feature/Feature1';
import Faq1 from '../Components/Faq/Faq1';
import Feature2 from '../Components/Feature/Feature2';
import Cta1 from '../Components/Cta/Cta1';
import Blog1 from '../Components/Blog/Blog1';
import Header1 from '../Components/Header/Header1';

const ContactModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', phone: '', email: '', description: '' });
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '0',
          maxWidth: '500px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '30px 30px 20px 30px',
          borderBottom: '1px solid #e2e8f0',
          textAlign: 'center',
          position: 'relative'
        }}>
          <h3 style={{
            margin: '0 0 8px 0',
            fontSize: '28px',
            fontWeight: '700',
            color: '#1a202c'
          }}>
            Get started today
          </h3>
          <p style={{
            margin: '0',
            fontSize: '16px',
            color: '#64748b'
          }}>
            Fill out the form and we'll get in touch with you shortly
          </p>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div style={{ padding: '20px 30px 30px 30px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151'
              }}>
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151'
              }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="(555) 123-4567"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@company.com"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#374151'
              }}>
                Tell us more about your requirements
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your needs or questions (optional)"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  minHeight: '80px',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={onClose}
                style={{
                  flex: '1',
                  padding: '14px 24px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#64748b',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  flex: '1',
                  padding: '14px 24px',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#ffffff',
                  background: '#d81671',
                  cursor: 'pointer'
                }}
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setIsMobileDevice(window.innerWidth <= 767);
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('/api/zoho-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        alert('Thank you! We will contact you soon.');
        setShowModal(false);
      } else {
        alert(result.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header1 />
      <HeroBanner1
        title="Grow your group benefits business 3x faster"
        content={
          isMobileDevice
            ? "Canada's leading insurance platform. AI-powered quoting, paperless enrollment, and benefits automation in one place. Boost productivity and close more deals with less effort."
            : "Transform your group benefits business with Canada's leading insurance platform. Access AI-powered quoting, paperless enrollment, and employee benefits automation—all in one place. Boost productivity, generate qualified leads, and close more deals with less effort."
        }
        btnname="Schedule a call now"
        btnurl="/contact"
        btntwo="Learn more"
        btn2url="/about"
        onBtnClick={openModal}
        onBtn2Click={openModal}
        cusimg="/assets/images/intro/introProfileThumb1_1.png"
        cusnumber="2,291"
        cuscontent="Happy customers"
        rating="4.8/5"
        ratingcon="Rating"
        img="/assets/images/hero/HEADER-IMAGE-.png"
      />
      <Brand1 />     
      
      <section className="expertise-section fix wcu-container-wrapper style1" style={{marginTop: '2px'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="expertise-content text-center">
                <div className="section-title" style={{ marginBottom: '24px' }}>
                  <h2 className="title wow fadeInUp" data-wow-delay=".2s" style={{
                    fontSize: '38px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: '#1a202c',
                    marginBottom: '0'
                  }}>About our expertise</h2>
                </div>
                <div className="expertise-description wow fadeInUp" data-wow-delay=".4s" style={{
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.7',
                    color: '#4a5568',
                    margin: '0',
                    fontWeight: '400'
                  }}>
                    PolicyAdvisor eXchange is built by experienced insurance brokers and technology experts with years of experience in the Canadian group benefits industry. Designed for brokers, it delivers market-leading solutions through partnerships with top carriers like Sun Life and Manulife.
                  </p>
                </div>
                <div className="trust-indicators wow fadeInUp" data-wow-delay=".6s" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '40px',
                  marginTop: '40px',
                  flexWrap: 'wrap'
                }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="hide-on-mobile" style={{ marginTop: '40px' }}></div>
      
      <div id="about">
        <About1
          img1="/assets/images/about/About-actual.png"
          img2="/assets/images/about/aboutThumb1_2.png"
          subtitle="About our app"
          title="Lightning-fast multi-carrier quotes"
          content="Stop losing deals because you can't quote fast enough is exactly what's costing brokers business today. Our streamlined platform gets you real-time rates from Sun Life, Manulife, Equitable Life, and other top Canadian carriers at unprecedented speed. Present multiple options while the opportunity is still hot, and close deals before your competitors even begin."
          FeatureList={[
            "Fast quotes from all major Canadian carriers",
            "Instant rate comparisons",
            "Rapid proposal generation",
          ]}                
          btnname="Start winning more deals"
          btnurl="/about"
          onBtnClick={openModal}
        />
      </div>
      
      <div className="hide-on-mobile" style={{ marginTop: '70px' }}></div>
      <Feature1 />
      
      <div id="how-it-works">
        <HowWork />
      </div>
      
      <div id="features">
        <Choose1
          subtitle="Platform advantage 🔥"
          title="Get more done by using paperless enrollment & smart forms"
          content="Stop wasting hours on manual paperwork and outdated enrollment processes. Our employee benefits automation and group insurance technology eliminate administrative headaches with intelligent digital forms and seamless enrollment, so you can focus on growing your brokerage, not chasing paperwork."
          FeatureList={[
            "Smart digital forms",
            "Paperless enrollment",
          ]} 
          FeatureList2={[
            "Automated processing",
            "Secure cloud storage",
          ]}                 
          btnname="Start free trial"
          btnurl="/about"
          onBtnClick={openModal}
        />
      </div>
      
      <div className="hide-on-mobile" style={{ marginTop: '30px' }}></div>
      
      {/* Challenges Comparison Section */}
      <section className="challenges-comparison section-padding" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mb-4 wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: '38px', lineHeight: '1.2' }}>
                  From challenge to competitive advantage
                </h2>
              </div>
              
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="d-flex flex-wrap justify-content-center gap-5">
                    {[
                      {
                        problem: {
                          title: "Lost deals to faster competitors"
                        },
                        solution: {
                          title: "Quote in minutes, close before competition starts"
                        }
                      },
                      {
                        problem: {
                          title: "Can't compare plans across insurers"
                        },
                        solution: {
                          title: "Transparent coverage with AI recommendations"
                        }
                      },
                      {
                        problem: {
                          title: "Manual renewals and paperwork chaos"
                        },
                        solution: {
                          title: "Automated workflows and paperless enrollment"
                        }
                      }
                    ].map((challenge, index) => (
                      <div key={index} className="challenge-tall-card wow fadeInUp" style={{
                        background: '#ffffff',
                        borderRadius: '20px',
                        padding: '0',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                        width: '420px',
                        height: '380px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <div style={{
                          // background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                          padding: '28px',
                          height: '50%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          borderRadius: '20px 20px 0 0',
                          textAlign: 'left',
                          borderBottom: '1px solid #e2e8f0'
                        }}>
                          <div style={{
                            fontSize: '14px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '1.4px',
                            marginBottom: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#dc2626'
                          }}>
                            <div style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              marginRight: '12px',
                              background: '#dc2626'
                            }}></div>
                            CHALLENGE
                          </div>
                          <h4 style={{
                            fontSize: '18px',
                            // fontWeight: '600',
                            lineHeight: '1.1',
                            marginBottom: '0',
                            color: '#0f172a'
                          }}>{challenge.problem.title}</h4>
                        </div>
                        
                        <div style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: '#d81671',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 6px 20px rgba(216, 22, 113, 0.2)',
                          zIndex: 10,
                          
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M7 13L12 18L17 13M12 6V18" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        
                        <div style={{
                          background: '#f2fcff',
                          padding: '28px',
                          height: '50%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          borderRadius: '0 0 20px 20px',
                          textAlign: 'left'
                        }}>
                          <div style={{
                            fontSize: '14px',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            letterSpacing: '1.4px',
                            marginBottom: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#8b5cf6'
                          }}>
                            <div style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              marginRight: '12px',
                              background: 'green'
                            }}></div>
                            <span style={{color: 'green'}}>SOLUTION</span>
                          </div>
                          <h4 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            lineHeight: '1.1',
                            marginBottom: '0',
                            color: '#0f172a'
                          }}>{challenge.solution.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Faq1 />
      <Feature2 />
      
      <div id="contact">
        <Cta1
          subtitle="PolicyAdvisoreXchange"
          title={<>Boost your group benefits business<br /> with proven results</>}
          content="Join brokers who increased their close rates using PolicyAdvisor eXchange. Our platform delivers lightning-fast quotes, professional proposals, and automated workflows to help you dominate the Canadian group benefits market."
          btnurl1="/contact"
          btnurl2="/about"
          onBtn1Click={openModal}
          onBtn2Click={openModal}
          img="/assets/images/phone_cta.png"
        />
      </div>
      
      {/* <div id="blog">
        <Blog1 />
      </div> */}
      
      <div className="hide-on-mobile" style={{ marginTop: '70px' }}></div>

      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Page;