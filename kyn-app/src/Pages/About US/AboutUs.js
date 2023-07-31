import Footer from "../../Component/Layout/Footer/Footer"
import NavBar from "../../Component/Layout/Navbar/Navbar"

const About = () => {
    return (
        <div>
            <NavBar></NavBar>

            <div>
                <div className="banner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="#e2434b"
                            fill-opacity="1"
                            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,192C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        ></path>
                    </svg>
            <div className="container px-lg-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h2 className="mt-5">About <span className="text-primary">Know Your Neighbohood</span></h2>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-primary rounded-pill px-4 me-3" href="">Start posting your store</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg?w=1060&t=st=1685632216~exp=1685632816~hmac=4578c6729dc7d7fe96605dc95e47fb7334b163344ef459384b117a5de994d064"
                        class="img-fluid wow zoomIn" data-wow-delay="0.5s" alt="about"></img>
                    </div>
                </div>
            </div>

            <div class="container">

            <div className="section-title mt-5 mb-5 text-center">
              <h3>Our <span className="text-primary">Vision & Mission</span></h3>
              <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
              <hr></hr>
            </div>

            <div className="row content mb-5">
              <div className="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                  <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>

        </div>
        <Footer></Footer>
        </div>
        </div>
        
    )
}

export default About