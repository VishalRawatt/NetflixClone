import React, { useEffect, useState } from 'react'
import '../listitem/listitem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import axios from 'axios';
import { Link ,useNavigate } from 'react-router-dom';


function Listitem({index,item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({}) ;
  
  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axios.get("/movies/find/"+item,{
          headers: {
            token:
              "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
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
    <Link to={{ pathname: "/watch", state: {movie: movie} }}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie?.imgSm}
        alt='img' />
      {isHovered && (
        <div>
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

        </div>
      )}
    </div>
    </Link>
  )
}

export default Listitem
