import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
} from "../constants/jsonplaceholder.contants";
import axios from "axios";

// export const increaseCounter = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// export const decreaseCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };
export const fetchJsonPlaceholder = () => {
  return (dispatch: any) => {
    dispatch(fetchJsonStarted());
    console.log("what");
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        console.log(res);
        dispatch(fetchJsonSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchJsonFailure(err.message));
      });
  };
};

const fetchJsonStarted = () => {
  return { type: ADD_TODO_STARTED };
};
const fetchJsonSuccess = (data: any) => {
  return { type: ADD_TODO_SUCCESS, payload: data };
};
const fetchJsonFailure = (err: any) => {
  return { type: ADD_TODO_FAILURE, paylaod: err };
};
