import NavBar from "../../Component/Layout/Navbar/Navbar";
import Footer from "../../Component/Layout/Footer/Footer";
import { Component } from "react";
import axios from "axios";

class AddStore extends Component {
    constructor() {
        super();
        this.state = {
            "name": '',
            "location": '',
            "date": '',
        }
    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    locationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    dateChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    addStore = (event) => {
        event.preventDefault();
        alert(this.state.name + " " + this.state.location + " " + this.state.date);
        axios
            .post("http://localhost:8080", this.state)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    //view HTML
    render() {
        return (
            <div>
            <NavBar></NavBar>
                <main className="container vh-100 mt-5 py-5" >
                    <div className="content" >
                        <div class="row align-items-center py-3">
                            <div class="col-6">
                                <h3 className="fs-4 card-title fw-bold mb-4 text-center">Post Car</h3>
                                <form onSubmit={this.addStore}>
                                    <input className="form-control mb-3 ps-4 pe-0" type="text"
                                        name="name" placeholder="Name"
                                        value={this.state.name} onChange={this.nameChange} />
                                    <input className="form-control mb-3 ps-4 pe-0" type="text"
                                        name="location" placeholder="Location"
                                        value={this.state.location} onChange={this.locationChange} />
                                    <input className="form-control mb-3 ps-4 pe-0" type="date"
                                        name="date" placeholder="Date"
                                        value={this.state.date} onChange={this.priceDate} />
                                    <div className="d-grid">
                                        <button type="submit" className="btn" style={{ backgroundColor: '#e88a1a' }}>
                                            Post
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-6">
                                <img className="card-img-top" alt="addStore"
                                src="https://img.freepik.com/free-vector/microsites-concept-illustration_114360-7302.jpg?t=st=1685625957~exp=1685626557~hmac=f912296df5afe0436e9cff9037660e0300f27887c8d035e4951607e0b13c1b23" />
                            </div>
                        </div>
                    </div>
                </main>
            <Footer></Footer>
            </div>
        )
    }
}

export default AddStore