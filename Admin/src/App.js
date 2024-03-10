import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css' ;
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./pages/userlist/Userlist";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import Login from "./pages/login/Login";
import { useContext } from "react";
import Listlist from "./pages/listList/Listlist";
import Movie from "./pages/movie/Movie";
import List from "./pages/list/List";
import NewMovie from "./pages/newMovie/NewMovie";
import MovieList from "./pages/movielist/MovieList";
import NewList from "./pages/newList/NewList";
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
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/newMovie" element={<NewMovie/>}/>
        <Route path="/lists" element={<Listlist/>}/>
        <Route path="/lists/:id" element={<List/>}/>
        <Route path="/newList" element={<NewList/>}/>
        </>
      }
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
