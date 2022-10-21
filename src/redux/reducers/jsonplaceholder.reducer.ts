import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
} from "../constants/jsonplaceholder.contants";

const initialState = {
  loading: false,
  todos: [],
  error: null,
};

const todoReducer = (state = initialState, action: any) => {
  console.log("action is =====", action.payload);
  switch (action.type) {
    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };

    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default todoReducer;
