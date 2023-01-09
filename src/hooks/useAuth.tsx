import * as React from "react";
//@ts-ignore

function useAuth() {
  const [authed, setAuthed] = React.useState(false);

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        //@ts-ignore
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        //@ts-ignore
        res();
      });
    },
  };
}
export default useAuth;
