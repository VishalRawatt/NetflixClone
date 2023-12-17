import React from 'react'
import './featured.scss';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

export default function Featured(props){
  return (
    <div className='featured'>
      {props.type && (
        <div className="category">
          <span>{props.type === "movie" ? "Movies" :"Series"}</span>
          <select name = "genre" id="genre">
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
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background'/>
      <div className="info">
        <img src='https://imgs.search.brave.com/awrUJnbIVPQpkROzYh9QzxfMKwoHfHa53_JotXBu8io/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8xMS9o/b21lbGFuZGVyLmpw/Zz93PTEwMDAmaD01/NjMmY3JvcD0x' alt='img' />
        <span className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio et impedit quae pariatur, vel, vero quia molestiae optio aliquam deleniti consequuntur nisi maxime, cum ad dolorum repudiandae cumque quod.
        </span>
        <div className="buttons">
          <button className="play"><PlayArrow/><span>Play</span></button>
          <button className="more"><InfoOutlined/><span>Info</span></button>
        </div>
      </div>
    </div>
  )
}