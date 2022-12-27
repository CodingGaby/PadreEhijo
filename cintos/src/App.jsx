import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Navigate, Route} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={user ? <Cart/> : <Navigate to="/login"/>}/>
        <Route exact path="/products/:category" element={<ProductList/>}/>
        <Route exact path="/product/:id" element={<Product/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route exact path="/success" element={<Success/>} />
      </Routes>
    </Router>
  );
};

export default App;