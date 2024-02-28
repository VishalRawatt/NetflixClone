export const getListsStart = () => ({
    type: "GET_LISTS_START",
  });
  
  export const getListsSuccess = (id) => ({
    type: "GET_LISTS_SUCCESS",
    payload: id,
  });
  
  export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
  });
  
  // export const createListstart = () => ({
  //   type: "CREATE_MOVIE_START",
  // });
  
  // export const createListsuccess = (movie) => ({
  //   type: "CREATE_MOVIE_SUCCESS",
  //   payload: movie,
  // });
  
  // export const createMovieFailure = () => ({
  //   type: "CREATE_MOVIE_FAILURE",
  // });
  
  // export const updateListstart = () => ({
  //   type: "UPDATE_MOVIE_START",
  // });
  
  // export const updateListsuccess = (movie) => ({
  //   type: "UPDATE_MOVIE_SUCCESS",
  //   payload: movie,
  // });
  
  // export const updateMovieFailure = () => ({
  //   type: "UPDATE_MOVIE_FAILURE",
  // });
  
  export const deleteListStart = () => ({
    type: "DELETE_LISTS_START",
  });
  
  export const deleteListSuccess = (id) => ({
    type: "DELETE_LISTS_SUCCESS",
    payload: id,
  });
  
  export const deleteListFailure = () => ({
    type: "DELETE_LISTS_FAILURE",
  });