import AuthReducer from "./AuthReducer";
import { createContext } from "react" ;

const INITIAL_STATE ={
    use:null,
    isFetching:false,
    error:false,
};

export const AuthContext = createContext(INITIAL_STATE);