import React, { useEffect, useState } from 'react'
import './home.scss';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}
          ${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTk3N2Y0Njk3MzZmYjE1ZjM0MGVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzU3ODQwOCwiZXhwIjoxNzEwMTcwNDA4fQ.y4fpQXutLDZriEjOD_IoN_vKhZKYD8GZwv9NhRnUKTg"
            },
          }
        );
        setLists(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists.map((list)=>(
        <List list= {list} />
      ))}
    </div>
  )
}

export default Home