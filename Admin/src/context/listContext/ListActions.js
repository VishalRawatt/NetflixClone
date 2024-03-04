export const getListStart = () => ({
    type: "GET_LISTS_START",
  });
  
  export const getListSuccess = (id) => ({
    type: "GET_LISTS_SUCCESS",
    payload: id,
  });
  
  export const getListFailure = () => ({
    type: "GET_LISTS_FAILURE",
  });
  
  export const createListStart = () => ({
    type: "CREATE_LISTS_START",
  });
  
  export const createListSuccess = (lists) => ({
    type: "CREATE_LISTS_SUCCESS",
    payload: lists,
  });
  
  export const createListFailure = () => ({
    type: "CREATE_LISTS_FAILURE",
  });
  
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