import Footer from "../../Component/Layout/Footer/Footer"
import NavBar from "../../Component/Layout/Navbar/Navbar"

const Home = () => {
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

                    <div className="container px-lg-5">
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="section-title position-relative mb-4 pb-2">
                                    <h2 className="mt-lg-5">Know Your Neighbohood</h2>
                                    <hr></hr>
                                </div>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.</p>

                                <div className="d-flex align-items-center mt-4">
                                    <a className="btn btn-primary rounded-pill px-4 me-3" href="/stores">Get started</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148562565.jpg?w=740&t=st=1685633990~exp=1685634590~hmac=d9c4d469e21a959dac29c89c901b374ee233b3af1e40948275fc2dfc8055d02f"
                                    className="img-fluid wow zoomIn" data-wow-delay="0.5s" alt="about"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Home