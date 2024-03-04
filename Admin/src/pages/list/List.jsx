import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./list.css";
import { useEffect, useState } from "react";

export default function List() {
  // const location = useLocation();
  // const list = location.list ;
  const [list, setList] = useState() ;
  const {id} = useParams() ;

    const ListData = async() => {
      await axios.get(`http://localhost:8080/api/lists/find/${id}`,{
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
      }).then((res)=>{
        setList(res.data) ;
      })
    }
  useEffect(()=>{
    ListData() ;
  },[])

  return (
    <div className="product">
      {list &&
      <>
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list.title} />
            <label>Type</label>
            <input type="text" placeholder={list.type} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
      </>}
    </div>
  );
}