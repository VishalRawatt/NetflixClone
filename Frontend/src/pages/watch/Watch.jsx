import React from 'react'
import '../watch/watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import video from '../../components/video/video.mp4' ;
import { Link } from 'react-router-dom';

function Watch() {
  const location = useLocation()
  const movie = location.movie ;
  console.log(location) ;
  return (
    <div className='watch'>
      <Link to='/'>
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      </Link>
      <video className="video"
        autoPlay controls src={location.state.movie.trailer}>
      </video>
    </div>
  )
}

export default Watch
