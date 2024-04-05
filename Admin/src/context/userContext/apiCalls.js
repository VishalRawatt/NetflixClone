import axios from "axios";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUserFailure,
  getUserStart,
  getUserSuccess
} from "./UserActions";

export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    console.error(err);
    dispatch(getUserFailure());
  }
};

//create
export const createUser = async (User, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post("/user", User, {
      headers: { 
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    console.error(err);
    dispatch(createUserFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    console.error(err);
    dispatch(deleteUserFailure());
  }
};