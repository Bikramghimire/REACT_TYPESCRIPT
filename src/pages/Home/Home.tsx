import React from "react";
import { useDispatch } from "react-redux";
import { fetchJsonPlaceholder } from "../../redux/actions/jsonplaceholder.action";
import { Dispatch } from "redux";
const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleFetchTodos = () => {
    console.log("hello world");
    dispatch(fetchJsonPlaceholder());
  };
  return (
    <div>
      <p>this is the home page</p>
      <button onClick={handleFetchTodos}>click for thunk to work</button>
    </div>
  );
};

export default Home;
