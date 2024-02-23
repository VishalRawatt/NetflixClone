const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIE_START":
            return {
                user: null,
                isFetching: false,
                error: false,
            }
        case "GET_MOVIE_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case "GET_MOVIE_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            }
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            }
        default:
            return { ...state };
    }
};

export default MovieReducer;