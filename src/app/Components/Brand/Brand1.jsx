"use client"
import Slider from "react-slick";
import data from '../../Data/brand1.json';
import ClientOnly from "../Common/ClientOnly";

const Brand1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,             
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        <div className="brand-slider-section section-padding fix">
            <div className="brand-slider-container-wrapper style1">
                <div className="container">
                    <div className="brand-slider-wrapper style1">
                        <h1 className="single-section-title wow fadeInUp" data-wow-delay=".2s" suppressHydrationWarning={true} style={{marginTop: '20px'}}>
                            Largest group insurance providers have partnered with us
                        </h1>
                        <div className="row">
                            <div className="slider-area brandSliderOne">
                                <div className="swiper gt-slider" id="brandSliderOne" >

                                    <div className="swiper-wrapper">
                                    <ClientOnly fallback={<div>Loading...</div>}>
                                    <Slider {...settings}>
                                    {data.map((item, index)=>(
                                        <div key={index} className="swiper-slide">
                                            <div className="brand-logo">
                                                <img 
                                            src={item.img} 
                                            alt="img" 
                                            style={{
                                                maxHeight: '144px',
                                                width: 'auto',
                                                height: 'auto',
                                                objectFit: 'contain'
                                            }}
                                            />
                                            </div>
                                        </div>
                                        ))}
                                        </Slider>
                                    </ClientOnly>
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

export default Brand1;