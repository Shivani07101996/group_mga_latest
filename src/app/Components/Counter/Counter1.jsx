"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Counter1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        
        <div className="counter-section fix">
            <div className="counter-container-wrapper style1">
                <div className="container">
                    <div className="counter-wrapper style1 section-padding"
                    data-background="/assets/images/shape/counterShape1_1.png"
                    suppressHydrationWarning={true}>
                        <div className="shape"></div>
                        <div className="container">
                            <div className="row gy-5">
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="counter" style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>
                                            <span className="counter-number">300</span> <span className="plus">+</span>
                                        </div>
                                        <p className="text" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>Active Insurance Brokers</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="counter" style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>
                                            <span className="counter-number">$12</span> <span className="plus">M+</span>
                                        </div>
                                        <p className="text" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>Annual Premiums Written</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="counter" style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>
                                            <span className="counter-number">2,500</span> <span className="plus">+</span>
                                        </div>
                                        <p className="text" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>Policies Successfully Closed</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                                    <div className="counter-box style1 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="counter" style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>
                                            <span className="counter-number">98</span> <span className="plus">%</span>
                                        </div>
                                        <p className="text" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>Broker Satisfaction Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter1;