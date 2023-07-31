import Footer from "../../Component/Layout/Footer/Footer"
import NavBar from "../../Component/Layout/Navbar/Navbar"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../Component/Context/auth-context";
import { useGoogleLogin } from "@react-oauth/google";


const Login = () => {
    const authCtx = useContext(AuthContext);
    const inputUsernameRef = useRef();
    const inputPasswordRef = useRef();

    const navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState("");

    // SUBMIT HANDLER
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputUsername = inputUsernameRef.current.value;
        const inputPassword = inputPasswordRef.current.value;

        console.log(inputUsername);
        console.log(inputPassword);

        axios
            .post("http://localhost:8080/api/auth/login", {
                username: inputUsername,
                password: inputPassword,
            })
            .then((res) => {
                console.log(res.data);
                setLoginStatus("SUCCESS");
                authCtx.login(res.data.accessToken);
                authCtx.isLoggedIn = true;

                    localStorage.setItem('userData', JSON.stringify(res.data));

               

                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
                setLoginStatus("FAILED");
            });

        inputUsernameRef.current.value = "";
        inputPasswordRef.current.value = "";
    };

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            handleGoogleLogin(codeResponse);
        },
        onError: (error) => console.log("Login Failed:", error),
    });

    const handleGoogleLogin = (codeResponse) => {
        axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${codeResponse.access_token}`,
                        Accept: "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setProfile(res.data);
                const accessToken = res.data.access_token; // Adjust this based on the response data
                setLoginStatus("SUCCESS");
                authCtx.login(accessToken);
                console.log(codeResponse.access_token);
                authCtx.isLoggedIn = true;
                navigate("/");
                                    localStorage.setItem('userData', JSON.stringify(res.data));


            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <NavBar></NavBar>

            <section className="vh-100" style={{ backgroundColor: '#34222e', paddingTop: '60px' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block mt-5">
                                        <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1685601674~exp=1685602274~hmac=f8577db6072433355e25fba864f502adeea947ede6bef51f3c158d41ecd8a7e4"
                                            alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={onSubmitHandler}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                </div>

                                                <h3 className="fw-semibold text-center" style={{ letterspacing: '1px' }}>Sign into your account</h3>
                                                <hr></hr>

                                                {loginStatus === "FAILED" && (
                                                    <div className="form-error text-center">
                                                        username or password is invalid
                                                    </div>
                                                )}

                                                <div className="form-outline mb-4 mt-4">
                                                    <input ref={inputUsernameRef} type="text" name="username" className="form-control" placeholder="Your Username" required></input>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input ref={inputPasswordRef} type="password" className="form-control" name="password" placeholder="Your Password" required />
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-block" type="submit" style={{ backgroundColor: '#fb5f60', color: '#34222e', width: '100%' }}>Sign In</button>
                                                </div>

                                                <button className="btn btn-outline-primary btn-block mb-3" type="button" style={{ width: '100%' }} onClick={() => login()}>Sign In with Google</button>

                                                <p className="mb-3 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/register"
                                                    style={{ color: '#393f81' }}>SignUp here</a></p>

                                                <a href="/regulations" className="small text-muted">Terms & Conditions</a>
                                            </form>

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

export default Login