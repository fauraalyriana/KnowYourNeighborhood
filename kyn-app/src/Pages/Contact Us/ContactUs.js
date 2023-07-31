import Footer from "../../Component/Layout/Footer/Footer"
import NavBar from "../../Component/Layout/Navbar/Navbar"

const Contact = () => {
    return (
        <div>
            <NavBar></NavBar>

            <section class="vh-100" style={{marginTop: '50px'}}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card" style={{ borderRadius: '1rem', backgroundColor: '#fee9d7' }}>
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.578992912668!2d-87.90363592407927!3d42.28286893997507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9465ad599cc5%3A0x4e8daeb1379d6b72!2s9111%20Leola%20Dr%2C%20Lake%20Bluff%2C%20IL%2060044%2C%20USA!5e1!3m2!1sen!2sth!4v1685608299759!5m2!1sen!2sth" width="100%" height="670px" frameborder="0" style={{ border: '0', borderRadius: '23px' }}></iframe>
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <form>
                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                    <i class="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                </div>
                                                <h3 class="fw-semibold text-center"><span className="text-primary">Contact Us</span> & Get In <span className="text-primary">Touch</span></h3>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-md-6 form-group mb-3">
                                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required></input>
                                                    </div>
                                                    <div className="col-md-6 form-group mt-3 mt-md-0 mb-3">
                                                        <input type="text" class="form-control" name="username" id="username" placeholder="Your Username" required></input>
                                                    </div>
                                                    <div className="col-md-6 form-group mb-3">
                                                        <input type="email" name="email" class="form-control" id="email" placeholder="Your Email" required></input>
                                                    </div>
                                                    <div className="col-md-6 form-group mt-md-0 mb-3">
                                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Your Subject" required></input>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <textarea type="text" class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                                    </div>
                                                </div>
                                                <div class="pt-1 mb-4">
                                                    <button class="btn btn-block" type="button" style={{ backgroundColor: '#fb5f60', color: '#34222e', width: '100%' }}>Send Message Now</button>
                                                </div>
                                            </form>

                                            <hr className="mt-5"></hr>
                                            <div class="more-info">
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div class="info-item">
                                                            <h4>Call</h4>
                                                            <p>010-020-0340</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="info-item">
                                                            <h4>Email</h4>
                                                            <p>info@knowyourneighborhood.com</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="info-item">
                                                            <h4>Location</h4>
                                                            <p>9111 Leola Drive, Lake Bluff, Lake, IL, USA</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Contact