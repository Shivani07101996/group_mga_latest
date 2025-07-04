import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="three-steps section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="How it works"
                            Title="Three simple steps to group benefits success!"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><img src="/assets/images/shape/workProcessShape1_1.png" alt="img" width={1416} height={225} /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s" suppressHydrationWarning={true}>
                                    <div className="step">STEP - 01</div>
                                    <div className="title">Submit group census</div>
                                    <div className="text">Upload company demographics through our secure portal. Quick setup for multi-carrier quoting.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s" suppressHydrationWarning={true}>
                                    <div className="step">STEP - 02</div>
                                    <div className="title">Compare quotes</div>
                                    <div className="text">Get fast quotes from Sun Life, Manulife, Great-West Life and more. AI highlights best options.</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s" suppressHydrationWarning={true}>
                                    <div className="step">STEP - 03</div>
                                    <div className="title">Secure the sale</div>
                                    <div className="text">Present professional proposals with expert underwriting support. Close deals faster with proven tools.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;