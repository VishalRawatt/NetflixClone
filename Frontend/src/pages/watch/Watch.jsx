import { useState, useEffect } from 'react';
import axios from 'axios';
import '../watch/watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fStore, storage } from '../../firebase' ;
import { getDownloadURL, listAll, ref } from "firebase/storage" ;
import { v4 } from 'uuid' ;

function Watch() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/movies/random`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
        },
      });
      setMovie([res.data]);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);

  // const [movie,setMovie] = useState('') ;
  // const [imgUrl, setImgUrl] = useState([]) ;
  // useEffect(() => {
  //   listAll(ref(storage,`items/${v4()}`)).then(imgs=>{
  //     console.log(imgs);
  //     imgs.items.forEach(val =>{
  //       getDownloadURL(val).then(url=>{
  //         setImgUrl(data=>[...data,url])
  //       })
  //     })
  //   });
  // },[])

  // console.log(imgUrl, "imgUrl") ;


  return (
    <div className='watch'>
      <Link to='/'>
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {movie.map((m) => (
      <div key={m.id}>
        <video className="video" autoPlay controls src={m[0].video}></video>
      </div>
    ))}
    </div>
  );
}

export default Watch;
