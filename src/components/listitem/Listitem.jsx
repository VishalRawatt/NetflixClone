import React, { useState } from 'react'
import '../listitem/listitem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

function Listitem(index) {
  const [isHovered, setisHovered] = useState(false);
  const leftValue = isHovered && (index.index * 225) - 50 + index.index * 2.5;
  const trailer = "https://www.pexels.com/video/snow-wood-light-road-19311447/";
  return (
    <div
      className='listItem'
      style={{ left: leftValue }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        src='https://th.bing.com/th/id/OIP.G4nYgjjgJrHtifmdPISIHQHaEc?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        alt='img' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>
            <div className="itemInfoTop">
              <span>1 hr 14 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>
            <div className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid! Delectus dignissimos quisquam asperiores repellat pariatur! Porro iusto sunt, ut ullam cum inventore.</div>
            <div className="genre">Action</div>
          </div>

        </>
      )}
    </div>
  )
}

export default Listitem
