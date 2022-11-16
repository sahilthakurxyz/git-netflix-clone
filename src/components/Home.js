import React from "react";
import { Button } from "react-bootstrap";
import { UserAuthContext, useUserAuth } from "../context/UserAuthContext";
function Home() {
  const { user } = useUserAuth();
  console.log("hello i am called");
  return (
    <>
      <div>
        <h1>Hello welcome</h1>
      </div>
    </>
  );
}

export default Home;
