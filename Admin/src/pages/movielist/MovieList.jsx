import "./movieList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext" ;
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);
  
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]) ;

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "movie", headerName: "Movie", width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "genre", headerName: "Genre", width: 120
    },
    {
      field: "year", headerName: "Year", width: 120
    },
    {
      field: "limit", headerName: "Limit", width: 120
    },
    {
      field: "isSeries", headerName: "is Series ?", width: 120
    },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname:`/movie/${params.row._id}`, state : { movie: params.row } }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      }}
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row)=>row._id}
        checkboxSelection
       />
    </div>
  );
}