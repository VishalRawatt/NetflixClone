import React, { useEffect, useState } from 'react'
import '../listitem/listitem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import axios from 'axios';

function Listitem({index,item}) {
  const [isHovered, setisHovered] = useState(false);
  const [movie, setMovie] = useState({}) ;
  const leftValue = isHovered && (index.index * 225) - 50 + index.index * 2.5;
  
  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axios.get("/movies/find"+item,{
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTk3N2Y0Njk3MzZmYjE1ZjM0MGVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzU3ODQwOCwiZXhwIjoxNzEwMTcwNDA4fQ.y4fpQXutLDZriEjOD_IoN_vKhZKYD8GZwv9NhRnUKTg"
          },
        });
        setMovie(res.data) ;
      }catch(e){
        console.log(e);
      };
    }
    getMovie();
  },[item]) ;

  return (
    <div
      className='listItem'
      style={{ left: leftValue }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        src={movie.img}
        alt='img' />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className='limit'>{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className='desc'>{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>

        </>
      )}
    </div>
  )
}

export default Listitem
