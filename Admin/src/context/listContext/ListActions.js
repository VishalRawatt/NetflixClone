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
  
  export const createListSuccess = (list) => ({
    type: "CREATE_LISTS_SUCCESS",
    payload: list,
  });
  
  export const createListFailure = () => ({
    type: "CREATE_LISTS_FAILURE",
  });
  
  export const updateListStart = () => ({
    type: "UPDATE_LISTS_START",
  });
  
  export const updateListSuccess = (list) => ({
    type: "UPDATE_LISTS_SUCCESS",
    payload: list,
  });
  
  export const updateMovieFailure = () => ({
    type: "UPDATE_LISTS_FAILURE",
  });
  
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