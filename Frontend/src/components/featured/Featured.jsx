import React, { useState, useEffect } from 'react'
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from 'axios';

export default function Featured({ type, setGenre }){
  const [content, setContent] = useState({}) ;
  useEffect(() =>{
    const getRandomContent = async()=>{
      try{
        const res = await axios.get(`/movies/random?type=${type}`,{
          headers: {
            token:
              "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]) ;
      }catch(e){
        console.log(e) ;
      }
    };
    getRandomContent() ;
  },[type]);
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" :"Series"}</span>
          <select name = "genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
            <option value="Genre">Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Crime">Crime</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantacy">Fantacy</option>
            <option value="Romance">Romance</option>
            <option value="Sci-fo">Sci-fo</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Drama">Drama</option>
            <option value="Historical">Historical</option>
            <option value="Documentary">Documentary</option>
          </select>

        </div>
      )}
      <img src={content.img} alt='background'/>
      <div className="info">
        <img src={content.imgSm} alt='img' style={{width:"350px",height:"200px"}}/>
        <span className='desc'>
          {content.desc}
        </span>
        <div className="buttons">
          <button className="play"><PlayArrow/><span>Play</span></button>
          <button className="more"><InfoOutlined/><span>Info</span></button>
        </div>
      </div>
    </div>
  )
}