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
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function App() {
  const Months = useMemo(()=>["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],[])
  const [userStats, setuserStats] = useState([]) ;

  useEffect(() => {
    const getStats = async() =>{
      try{
      const res= await axios.get("/users/stats",{
        headers:{
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTk3N2Y0Njk3MzZmYjE1ZjM0MGVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODQ0MzI3NCwiZXhwIjoxNzExMDM1Mjc0fQ.qDzh_ezs09Tec8rhgznnf3DieJug9VV19x09hxhWd-g"},
        }) ;
        res.data.map(item =>{
          setuserStats(prev=>[...prev,{name:Months[item._id - 1], "New User": item.total},])
        })
    }catch(e){
      console.log(e) ;
    }
    };
    getStats() ;
  },[Months]);
  console.log(userStats) ;
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
        <Route path="/product" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/newProduct" element={<NewProduct/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
