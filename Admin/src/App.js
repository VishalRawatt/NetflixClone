import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css' ;
import Home from "./components/pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./components/pages/userlist/Userlist";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<UserList/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
