import Link from "next/link";

const Blog1 = () => {
    return (
        
        <section className="blog-section section-padding fix">
            <div className="container">
                <div className="blog-wrapper style1">
                    <div className="section-title text-center mxw-685 mx-auto">
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">Recent articles and latest blog</h2>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".2s">
                                <div className="thumb">
                                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Business meeting discussing group benefits strategies" width={326} height={219} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        📋 Group Benefits
                                    </div>
                                    <h3><Link href="/blog/blog-details">5 strategies to close more group benefits deals this quarter</Link></h3>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".4s">
                                <div className="thumb">
                                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="AI technology and data analytics for insurance" width={326} height={219} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        💼 Sales Tips
                                    </div>
                                    <h3><Link href="/blog/blog-details">How AI-powered quoting increases your commission by 40%</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".6s">
                                <div className="thumb">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" alt="Modern technology platform and multi-carrier solutions" width={326} height={219} />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                        🚀 Technology
                                    </div>
                                    <h3><Link href="/blog/blog-details">Why multi-carrier platforms are the future of group benefits</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog1;