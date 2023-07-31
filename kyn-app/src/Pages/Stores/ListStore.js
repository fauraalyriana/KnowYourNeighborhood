import NavBar from "../../Component/Layout/Navbar/Navbar";
import Footer from "../../Component/Layout/Footer/Footer";

const ListStore = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container-fluid">
                <div class="container py-5 mt-5">
                    <div class="row align-items-start">
                        <div class="col-6">
                            <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?t=st=1685628241~exp=1685628841~hmac=546cadde46743422f3a75fda6ec17bd80e69d60cad5a05f1f585b05721b24ada"
                                style={{ width: '70%' }} alt="content"></img>
                        </div>
                        <div class="col-6 py-5">
                            <h2 className="text-center">Find a store you're looking for or start adding your store</h2>
                            <hr></hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/addStore" class="btn me-md-2" type="button" style={{ backgroundColor: '#fbba60' }}>Add Store</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ListStore