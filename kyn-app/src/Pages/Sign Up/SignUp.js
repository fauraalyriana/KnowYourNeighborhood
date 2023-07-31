import Footer from "../../Component/Layout/Footer/Footer"
import NavBar from "../../Component/Layout/Navbar/Navbar"
import axios from "axios";
import { Component } from "react";

class Register extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          username: "",
          email: "",
          password: "",
          registrationComplete: false,
          registrationStatus: "",
        };
      }
    
      nameChange = (event) => {
        this.setState({
          name: event.target.value,
        });
      };
    
      emailChange = (event) => {
        this.setState({
          email: event.target.value,
        });
      };
    
      passwordChange = (event) => {
        this.setState({
          password: event.target.value,
        });
      };
    
      usernameChange = (event) => {
        this.setState({
          username: event.target.value,
        });
      };
    
      register = (event) => {
        event.preventDefault();
        alert(
          this.state.name +
            " " +
            this.state.username +
            " " +
            this.state.email +
            " " +
            this.state.password
        );
    
        axios
          .post("http://localhost:8080/api/user/register", this.state)
          .then((res) => {
            console.log(res.data);
            this.setState({ registrationComplete: true });
          })
          .catch((error) => {
            console.log(error);
            this.setState({ registrationStatus: "FAILED" });
          });
      };

    render() {
        if (this.state.registrationComplete) {
            return (
                <div>
                    <NavBar></NavBar>
                    <div className="container-fluid">
                        <div className="container py-5">
                            <div className="col-6 mx-auto">
                                <img src="https://img.freepik.com/free-vector/multi-device-targeting-concept-illustration_114360-7305.jpg?w=1060&t=st=1685899647~exp=1685900247~hmac=9c79883e5ee0fbb92b980d5770532122a55fd48ea0ab2d769bdcae76ede955c4"
                                    style={{ width: '70%' }} alt="success"></img>
                                <h2 className="text-center">Thank You for Registering!</h2>
                                <hr></hr>
                                <p>You have successfully registered.  Start to find or post your store? <a href="/login" className="link-primary">Continue</a></p>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            );
        } else {
            return (
                <div>
                    <NavBar></NavBar>

                    <section className="vh-100" style={{ backgroundColor: '#34222e', paddingTop: '40px' }}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-xl-10">
                                    <div className="card" style={{ borderRadius: '1rem' }}>
                                        <div className="row g-0">
                                            <div className="col-md-6 col-lg-5 d-none d-md-block" style={{ marginTop: '100px' }}>
                                                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg"
                                                    alt="login form" class="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                            </div>
                                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                                <div className="card-body p-4 p-lg-5 text-black">

                                                    <form onSubmit={this.register}>

                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                        </div>

                                                        <h3 className="fw-semibold text-center" style={{ letterspacing: '1px' }}>Create new account</h3>
                                                        <hr></hr>

                                                        {this.state.registrationStatus === "FAILED" && (
                                                            <div className="form-error fw-semibold text-center mb-5">
                                                                Register failed
                                                            </div>
                                                        )}

                                                        <div className="form-outline mb-4 mt-4">
                                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required
                                                                value={this.state.name}
                                                                onChange={this.nameChange}></input>
                                                        </div>

                                                        <div className="form-outline mb-4">
                                                            <input type="text" className="form-control" name="eusername" placeholder="Your Username" required
                                                                value={this.state.username}
                                                                onChange={this.usernameChange} />
                                                        </div>

                                                        <div className="form-outline mb-4">
                                                            <input type="email" className="form-control" name="eusername" id="email" placeholder="Your Email" required
                                                                value={this.state.email}
                                                                onChange={this.emailChange} />
                                                        </div>

                                                        <div className="form-outline mb-4">
                                                            <input type="password" className="form-control" name="password" placeholder="Your Password" required
                                                                value={this.state.password}
                                                                onChange={this.passwordChange} />
                                                        </div>

                                                        <div className="pt-1 mb-4">
                                                            <button className="btn btn-block" type="submit" style={{ backgroundColor: '#fb5f60', color: '#34222e', width: '100%' }}>Sign Up</button>
                                                        </div>

                                                        <p className="mb-3 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <a href="/login"
                                                            style={{ color: '#393f81' }}>Sign In here</a></p>


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
    }
}

export default Register