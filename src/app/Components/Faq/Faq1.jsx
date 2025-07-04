"use client"
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";
import data from '../../Data/faq1.json';

const Faq1 = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };

    const FaqContent = {
        Content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly',
        img1:'/assets/images/faq/FAQ-THUMB.png',
        img2:'/assets/images/faq/faqThumb1_1.png'
      }

    return (
        
        <section className="faq-section section-padding fix">
            <div className="container">
                <div className="faq-wrapper style1">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="faq-content style1 text-center">
                                <div className="section-title">
                                    <SectionTitle
                                        SubTitle="FAQs"
                                        Title="Common questions from insurance brokers"
                                    ></SectionTitle>                                    
                                    <p className="section-desc wow fadeInUp" data-wow-delay=".6s" suppressHydrationWarning={true}>Explore quick answers to the most frequently asked questions about using PolicyAdvisor eXchange.</p>
                                </div>
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                    {data.slice(0,4).map((item, index)=> (
                                        <div key={index} className={`accordion-item mb-3 wow fadeInUp ${index === openItemIndex ? "active" : "" }`} data-wow-delay=".3s" suppressHydrationWarning={true}>
                                            <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                                <button className={`accordion-button ${index === openItemIndex ? "" : "collapsed"}`} type="button">
                                                    {item.title}
                                                </button>
                                            </h5>
                                            {index === openItemIndex && (
                                            <div className="accordion-collapse show">
                                                <div className="accordion-body text-start">
                                                    {item.desc}
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    ))}
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

export default Faq1;