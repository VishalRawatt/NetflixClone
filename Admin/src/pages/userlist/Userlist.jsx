import "./userlist.css"
import { DeleteOutlined, Person2 } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { getUser, deleteUser } from "../../context/userContext/apiCalls";
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";

export default function UserList() {
  const { users, dispatch } = useContext(UserContext) ;
  console.log(users) ;

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]) ;

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 ,
    renderCell:(params)=>{
      return(
        <div className="userListUser">
          {params.row.profilePicture!==""?(
            <img src={params.row.profilePicture} alt="img" className="userListImg"/>):(
              <Person2/>
            )}
        </div>
      )
    }  },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 160,
    },
    {
      field: "action",
      headerName: 'Action',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={{pathname:`/users/${params.row._id}`}}>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutlined 
          className="userListDelete" 
          onClick={()=>{handleDelete(params.row._id)}}/>
          </>
        )
      }
    }
  ];
  return (
    <div className="userList" style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row)=>row._id}
        checkboxSelection
       />
    </div>
  )
}
  