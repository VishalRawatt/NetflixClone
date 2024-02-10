import React, { useEffect, useState } from 'react'
import './home.scss' ;
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

const Home = ({type}) => {
  const [lists,setLists] = useState([]) ;
  const [genre,setGenre] = useState(null) ;

  useEffect(()=>{
    const getRandomLists = async() =>{
      try{
        const res =await axios.get(`
        lists${type ? "?type="+type : ""}&${genre ? "&genre="+genre : ""}
        `);
        setLists(res.data) ;
      }catch(e){
        console.error(e);
      }
    };
    getRandomLists() ;
  },[type,genre]);
  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home