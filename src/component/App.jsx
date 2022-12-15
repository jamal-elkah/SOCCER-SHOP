import Navbar from "./Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"
import Products from './Products';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import Cart from './Cart';
import Login from './Login';
import SignUp from './Sign';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/products/:id" element={<Product />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signUp" element={<SignUp />} />
            </Routes>
        </>
    )
}
export default App