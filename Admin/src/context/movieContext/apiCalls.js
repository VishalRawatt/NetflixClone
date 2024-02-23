import axios from "axios";
import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieAction";

export const getMovies = async (dispatch) =>{
    dispatch(getMoviesStart()) ;
    try{
        const res = axios.get("/movies", {
            headers:{
                token: "Bearer " + localStorage.getItem("user").accessToken,
        },
    }) ;
    dispatch(getMoviesSuccess(res.dataF))
    }catch(err){
       dispatch(getMoviesFailure()) ;
    }
}