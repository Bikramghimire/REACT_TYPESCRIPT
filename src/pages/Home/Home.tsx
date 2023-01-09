import React from "react";
import { useDispatch } from "react-redux";
import { fetchJsonPlaceholder } from "../../redux/actions/jsonplaceholder.action";
import { Dispatch } from "redux";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const handleFetchTodos = () => {
    console.log("hello world");
    dispatch(fetchJsonPlaceholder());
  };
  const { login } = useAuth();

  const handleLogin = () => {
    login().then(() => {
      navigate("/privateroutes");
    });
  };

  return (
    <div>
      <p>this is the home page</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleFetchTodos}>click for thunk to work</button>
    </div>
  );
};

export default Home;
