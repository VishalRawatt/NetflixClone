import React, { useEffect, useState } from 'react'
import './home.scss' ;
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

const Home = ({type}) => {
  const [lists,setList] = useState([]) ;

  useEffect(()=>{
    const getRandomLists = async() =>{
      try{
        const res =await axios.get("")
      }catch(e){
        console.error(e);
      }
    }
  })
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