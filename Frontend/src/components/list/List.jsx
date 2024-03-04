import { useRef, useState } from 'react'
import '../list/list.scss' ;
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import Listitem from '../listitem/Listitem';

function List({list}) {
    const listRef = useRef() ;
    const [isMoved, setisMoved] = useState(false) ;
    const [slideNumber, setSlideNumber] = useState(0) ;
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

    const handleClick = (direction) =>{
        setisMoved(true) ;
        let distance = listRef.current.getBoundingClientRect().x -50 ;
        if(direction === 'left' && slideNumber >0){
            setSlideNumber(slideNumber -1) ;
            listRef.current.style.transform =  `translateX(${230 + distance}px)` ;
        }
        console.log(distance) ;
        if(direction === 'right' && slideNumber <10 - clickLimit){
            setSlideNumber(slideNumber+1) ;
            listRef.current.style.transform =  `translateX(${-230 + distance}px)` ;
        }
    }
  return (
    <div className='list'>
       <span className='listTitle'>{list.title}</span>
       <div className="wrapper">
        <ArrowBackIosOutlined 
        className='sliderArrow left' 
        onClick={()=>handleClick("left")} 
        style={{display: !isMoved && "none"}}/>
        <div className="container" ref={listRef}>
            {list.content.map((item,i)=>(
            <Listitem index={i} item={item}/>
            ))}
        </div>
        <ArrowForwardIosOutlined 
        className='sliderArrow right' 
        onClick={()=>handleClick("right")}/>
       </div>
    </div>
  )
}

export default List
