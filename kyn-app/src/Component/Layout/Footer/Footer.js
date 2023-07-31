const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container-fluid py-5" style={{backgroundColor: '#e2434b'}}>
                        <div className="row">

                            <div className="col-lg-3 col-md-6" style={{marginLeft: '32px'}}>
                                <div className="footer-white">
                                    <h3 className="fw-semibold fst-italic text-white">Know Your <br></br> Neighborhood<span></span></h3>
                                    <p>
                                    9111 Leola Drive, <br></br>
                                    Lake Bluff, Lake, IL, USA<br></br><br></br>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="about_us">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="contact_us">Contact us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="cars">View all store</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="cars">Post Store</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="register">Sign Up</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="login">Sign In</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="regulations">Terms & Conditions</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a className="text-white" href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="footer-white">
                                    <p>
                                        <strong>Phone:</strong> <br></br> <span className="text-white">010-020-0340</span><br></br>
                                        <strong>Email:</strong> <br></br> <span className="text-white">info@knowyourneighborhood.com</span><br></br>
                                        <strong>Location:</strong> <br></br> <span className="text-white">9111 Leola Drive, Lake Bluff, Lake, IL, USA</span><br></br>
                                    </p>
                                </div>
                                <div>
                                    <a href="" className="me-4 text-reset"> <i className="fab fa-facebook-f"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-twitter"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-google"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-instagram"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-linkedin"></i>
                                    </a> <a href="" className="me-4 text-reset"> <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="container py-3">
                            <div className="copyright text-center">
                                &copy; Copyright <strong><span>KYN</span></strong>. All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer