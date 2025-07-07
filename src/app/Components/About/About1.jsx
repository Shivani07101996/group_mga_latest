import Link from "next/link";

const About1 = ({img1,img2,subtitle,title,content,FeatureList,btnname,btnurl,onBtnClick}) => {
    return (
        
        <section className="about-section fix">
            <div className="about-container-wrapper style1">
                <div className="container">
                    <div className="about-wrapper style1">
                        <div className="row gy-5 gx-60">
                            <div className="col-xl-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        
                                        <h2 className="title wow fadeInUp mt-10" data-wow-delay=".4s">{title}</h2>
                                        <p className="section-desc wow fadeInUp" data-wow-delay=".6s">{content}</p>
                                    </div>
                                    <ul className="checklist style1 wow fadeInUp" data-wow-delay=".2s">
                                    {FeatureList?.map((item, index) => (
                                        <li key={index}><img src="/assets/images/icon/checkmarkIcon.png" alt="img" width={30} height={30} /> {item}</li>
                                    ))}
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-thumb">
                                    <div className="bg"></div>
                                    <div className="thumbShape1 d-none d-xxl-block cir36"><img src="/assets/images/shape/aboutThumbShape1_1.png" alt="img" width={67} height={67} /></div>
                                    <div className="thumbShape2 d-none d-xxl-block cir36">
                                    <img src="/assets/images/shape/aboutThumbShape1_4.png" alt="img" width={24} height={24} />
                                        </div>
                                    <div className="thumbShape3 d-none d-xxl-block cir36 float-bob-y">
                                    <img src="/assets/images/shape/OPT-2.png" alt="img" width={200} height={200} />
                                        </div>
                                    <div className="thumbShape4 d-none d-xxl-block cir36">
                                    <img src="/assets/images/shape/aboutThumbShape1_4.png" alt="img" width={28} height={28} />
                                        </div>
                                    <div className="main-thumb">
                                    <img src={img1} alt="img" width={436} height={530} />
                                    </div>
                                    <div className="absolute-thumb float-bob-x">
                                    <img src={img2} alt="img" width={216} height={108} />
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

export default About1;