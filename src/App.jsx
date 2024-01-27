import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    );
  }

  const { user } = useAuth0();

  return <>{isAuthenticated ? <Home user={user} /> : <Login />}</>;
}

export default App;
