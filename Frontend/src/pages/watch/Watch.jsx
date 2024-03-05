import {useState, useEffect} from 'react'
import axios from 'axios' 
import '../watch/watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Watch() {
  // const location = useLocation()
  // const movie = location.movie ;
  const [movie, setMovie] = useState() ;
  const {id} = useParams() ;
  
    const getData = async() => {
      await axios.get(`http://localhost:8080/api/movies/${id}`,{
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
      }).then((res)=>{
        setMovie(res.data) ;
      })
    }
    useEffect(()=>{
      getData() ;
    },[])
  return (
    <div className='watch'>
      <Link to='/'>
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      </Link>
      <video className="video"
        autoPlay controls src={movie.video}>
      </video>
    </div>
  )
}

export default Watch
