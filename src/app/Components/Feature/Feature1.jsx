import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s" suppressHydrationWarning={true}>
                        <SectionTitle
                            SubTitle="Why Choose PolicyAdvisoreXchange 🔥"
                            Title="Our Platform Is Perfect For Solo Brokers, Growing Agencies And Large Brokerages"
                        ></SectionTitle>                       
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 col d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Smart Plan Analysis"
                                        content="AI-powered comparisons show clients the best options instantly."
                                    ></FeatureCard>
                                     <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="All Carriers, One Platform"
                                        content="Quick quotes from all major carriers in one place."
                                    ></FeatureCard>    
                                      <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Smart Digital Forms"
                                        content="Paperless enrollment eliminates manual paperwork."
                                    ></FeatureCard> 
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s" suppressHydrationWarning={true}>
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s">
                                    <img src="/assets/images/Freatures-.png?v=2" alt="img" width={451} height={410} />
                                        </div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="Live Professional Help"
                                        content="Expert support for complex cases and underwriting questions."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_5.svg"
                                        title="Cross-Selling Intelligence"
                                        content="AI recommendations increase commission per case."
                                    ></FeatureCard>                                                                          
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_6.svg"
                                        title="Hands-Free Admin"
                                        content="Automated renewals, billing and compliant submissions."
                                    ></FeatureCard> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;