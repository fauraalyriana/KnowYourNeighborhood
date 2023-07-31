import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './Pages/Sign Up/SignUp';
import Login from './Pages/Sign In/SignIn';
import Contact from './Pages/Contact Us/ContactUs';
import ListStore from './Pages/Stores/ListStore';
import AddStore from './Pages/Stores/AddStore';
import Regulations from './Pages/Terms & Conds/Regulations';
import About from './Pages/About US/AboutUs';
import AuthContext from './Component/Context/auth-context';
import { useContext } from 'react';


function App() {
	const authCtx = useContext(AuthContext);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Navigate to='/kyn' replace />}></Route>
				<Route path='/kyn' element={<Home></Home>}></Route>
				<Route path='/about-us' element={<About></About>}></Route>
				<Route path='/contact-us' element={<Contact></Contact>}></Route>
				<Route path="/regulations" element={<Regulations></Regulations>}></Route>

				<Route path="/stores" element={authCtx.isLoggedIn ? <ListStore /> : <Navigate to="/login" />}></Route>
				<Route path='/addStore' element={<AddStore></AddStore>}></Route>


				{!authCtx.isLoggedIn && (
					<>
						<Route path="/register" element={<Register></Register>}></Route>
						<Route path='/login' element={<Login></Login>}></Route>
					</>
				)}
			</Routes>
		</Router>
	)
}

export default App;
