import React, { createContext } from "react";
import useAuth from "./hooks/useAuth";
import Routing from "./Routing";

function App() {
  //@ts-ignore
  const authContext = createContext();
  const auth = useAuth();
  return (
    <div className="App">
      <authContext.Provider value={auth}>
        <Routing />
      </authContext.Provider>
    </div>
  );
}

export default App;
