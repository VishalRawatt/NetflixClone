import { DeleteOutlined } from "@mui/icons-material";
import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200 },
    { field: 'email', headerName: 'Email', width: 200,renderCell:(params)=>{
      return(
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="its img"/>
          {params.row.user}
        </div>
      )
    }  },
    {
      field: 'status',
      headerName: 'status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: "action",
      headerName: 'Action',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <button className="userListEdit">Edit</button>
          <DeleteOutlined className="userListDelete"/>
          </>
        )
      }
    }
  ];
  
  const rows = [
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
    { id: 1, user: "Pankaj Srivastava", avatar: "https://imgs.search.brave.com/m60PMsqHReIkayurO5KD9kLSNT0kn7rUkUBJ86DZOBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODAwODEzNC9waG90/by9pbmRpYW4tbWFu/LWhlYWRzaG90Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz10/dFVVaG5Yd1RWaEdx/RWk2UVU0elNrcDFL/UDQ0bENLNFdJd29T/by1MWHBZPQ",email:"EmailId@gmail.com",status:"active",transaction:"$120.00",},
  ];
  return (
    <div className="userList" style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
  