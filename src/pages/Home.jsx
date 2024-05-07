import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";

const Home = () => {
    return (


        <>
            <Navbar />
            <div className='bg-secondary'>

                <title>
                    CANQUEST - Best Prepaid, Postpaid Plans, WiFi Connection &amp; Mobile
                </title>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    /* Custom CSS for card design */
                    .card {
                        border-radius: 20px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s;
                    }
                    .card:hover {
                        transform: translateY(-10px);
                    }
                    .card-title {
                        color: #333;
                    }
                    .card-text {
                        color: #666;
                    }
                    .btn-primary {
                        background-color: #ff6b6b;
                        border-color: #ff6b6b;
                    }
                    .btn-primary:hover {
                        background-color: #ff8c8c;
                        border-color: #ff8c8c;
                    }
                    .slider {
                        width: 80%;
                        margin: 0 auto;
                    }
                    .slider .slick-slide {
                        margin: 0 10px;
                    }
                    .slider .slick-slide img {
                        width: 100%;
                        border-radius: 10px;
                    }
                    .slick-prev,
                    .slick-next {
                        font-size: 30px;
                        color: #333;
                    }
                    .slick-prev:hover,
                    .slick-next:hover {
                        color: #555;
                    }
                ` }} />

                <section className="offers pt-4">
                    <div className="container">
                        <h2>Special Offers</h2>
                        <Link to="/plans" className=" mb-4 btn btn-primary">Get Started</Link>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Prepaid Plans</h5>
                                        <p className="card-text">
                                            Explore our range of prepaid plans tailored to suit your
                                            needs.
                                        </p>
                                        <Link to="/plans" className="btn btn-primary">View Plans</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Postpaid Plans</h5>
                                        <p className="card-text">
                                            Discover our flexible postpaid plans with unlimited benefits.
                                        </p>
                                        <Link to="/plans" className="btn btn-primary">View Plans</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Broadband Offers</h5>
                                        <p className="card-text">
                                            Get lightning-fast internet with our broadband offers.
                                        </p>
                                        <Link to="/plans" className="btn btn-primary">View Offers</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ padding: "30px", display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {/* 
                    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="air1.jpeg" style={{ width: '100%', height: '400px', margin: '5px', objectFit: 'cover' }} alt="..." />
                    </div> */}
                    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="air2.png" style={{ width: '100%', height: 'auto', margin: '5px', objectFit: 'content' }} alt="..." />
                    </div>
                    {/* <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="air3.jpg" style={{ width: '100%', height: '400px', margin: '5px', objectFit: 'cover' }} alt="..." />
                    </div>
                    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="Airtel-Recharge-Offers.webp" style={{ width: '100%', height: '400px', margin: '5px', objectFit: 'cover' }} alt="..." />
                    </div>
                    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="best_airtel_prepaid_plan.png" style={{ width: '100%', height: 'auto', margin: '5px', objectFit: 'cover' }} alt="..." />
                    </div>
                    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="Airtel-60days-60deals-tariff.webp" style={{ width: '100%', height: 'auto', margin: '5px', objectFit: 'cover' }} alt="..." />
                    </div>
                    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="Jio_new_plans-x658.webp" style={{ width: '100%', height: 'auto', margin: '5px', objectFit: 'cover' }} alt="..." />
                    </div>
                    <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
                        <img src="Airtel-60-days-60-deals-prepaid.webp" style={{ width: '100%', height: 'auto', margin: '5px', objectFit: 'cover' }} alt="..." />
                    </div> */}



                    {/* Repeat the above divs for other images */}
                </div>


                {/* Offers Section */}
                {/* Footer */}
                <footer className="footer mt-5">
                    <div className="container">
                        <p>© 2024 CANQUEST. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>


        </>

    )
}

export default Home