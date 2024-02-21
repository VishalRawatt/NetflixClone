import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css' ;
import Home from "./components/pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./components/pages/userlist/Userlist";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newuser/NewUser";
import ProductList from "./components/pages/productlist/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/movies" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/newProduct" element={<NewProduct/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
