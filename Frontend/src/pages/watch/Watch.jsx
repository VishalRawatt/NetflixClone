import React from 'react'
import video from '../../components/video/video.mp4' ;
import '../watch/watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';

function Watch() {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      <video className="video"
        autoPlay progress controls src={video}>
      </video>
    </div>
  )
}

export default Watch
