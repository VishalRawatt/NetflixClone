import React from 'react'
import './home.scss' ;
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <img src='https://th.bing.com/th/id/R.2d300c3cf447c510fd52c24db6c2ef6b?rik=VkwO4hKWqDRO4g&riu=http%3a%2f%2fcdn.fansided.com%2fwp-content%2fblogs.dir%2f340%2ffiles%2f2014%2f11%2fnetflix-Peaky-Blinders.jpg&ehk=QMnUgeACxxL%2fMUFw5H3aLoYC6lN1vx9bGorjxe%2fc%2fJo%3d&risl=&pid=ImgRaw&r=0' alt='background'/>
    </div>
  )
}

export default Home