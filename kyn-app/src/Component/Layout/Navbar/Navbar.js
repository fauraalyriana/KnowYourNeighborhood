import { Button } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import restaurantImage from "../../../Images/restaurant.png"
import AuthContext from "../../Context/auth-context";
import { useContext } from "react";

import "../Navbar/Navbar.css"

const NavBar = (props) => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        authCtx.logout();
        navigate("/login");
    };

    const userData = localStorage.getItem("userData");
    let name = "";
    let email = "";

    if (userData) {
        const userObj = JSON.parse(userData);
        name = userObj.name;
        email = userObj.email;
    }

        console.log(name, email);

    return (
        <div>
            <Navbar className={props.className} style={{ backgroundColor: '#e2434b' }}>
                <Container>
                    <NavLink className="navbar-brand fw-semibold fst-italic text-white">
                        <img src={restaurantImage} alt="shop" style={{ height: '40px' }} />
                        Know Your Neighborhood
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Nav className="ms-auto me-md-auto">
                        <NavLink
                            activeclassname="active"
                            className="nav-link text-uppercase fw-bold me-3"
                            to="/kyn" style={{ color: '#34222e' }}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            activeclassname="active"
                            className="nav-link text-uppercase fw-bold me-3"
                            to="/stores" style={{ color: '#34222e' }}
                        >
                            Stores
                        </NavLink>

                        <NavLink
                            activeclassname="active"
                            className="nav-link text-uppercase fw-bold me-3"
                            to="/about-us" style={{ color: '#34222e' }}
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            activeclassname="active"
                            className="nav-link text-uppercase fw-bold"
                            to="/contact-us" style={{ color: '#34222e' }}
                        >
                            Contact Us
                        </NavLink>
                    </Nav>
                    <Nav>

                        {!authCtx.isLoggedIn && (
                            <>
                                <Link to="/register">
                                    <Button
                                        variant="outline-light"
                                        className="me-0 me-md-3 mb-md-0 mb-3">
                                        Sign Up
                                    </Button>
                                </Link>

                                <Link to="/login">
                                    <Button
                                        variant="outline-light"
                                        className="me-0 me-md-3 mb-md-0 mb-3">
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        )}

                        {authCtx.isLoggedIn && (
                            <>
                            <Button
                                variant="outline-light"
                                className="me-0 me-md-3 mb-md-0"
                                onClick={logoutHandler}
                            >
                                Logout
                            </Button>

                            <h6 className="px-3 text-uppercase fw-bold text-white me-3">{name} <br></br> {email}</h6>

                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar