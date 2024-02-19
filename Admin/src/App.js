import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css' ;
import Home from "./components/pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./components/pages/userlist/Userlist";
import User from "./components/pages/user/User";

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
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
