import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css' ;
import Home from "./components/pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./components/pages/userlist/Userlist";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newuser/NewUser";
import ProductList from "./components/pages/movielist/MovieList";
import Product from "./components/pages/movie/movie";
import NewProduct from "./components/pages/newMovie/NewMovie";
import Login from "./components/pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
        <Route path="/login" element={user ? <Home/>: <Login/> }/>
        {user &&
        <>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/newUser" element={<NewUser/>}/>
        <Route path="/movies" element={<ProductList/>}/>
        <Route path="/movie/:id" element={<Product/>}/>
        <Route path="/newMovie" element={<NewProduct/>}/>
        </>
      }
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
