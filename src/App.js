import React, { useContext } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/pages/admin/Login/Login";
import Register from "./components/pages/admin/Register/Register";
import SwipableWrap from "./components/Templates/Swipables/SwipableWrap";
import ContextProvider from "./contextProvider/ContextProvider";
import PagesWarapper from "./components/pages/PagesWarapper/PagesWarapper";
import { LoginContext } from './contexts/LoginContext/LoginContext';

function App() {
  
  return (
    <div className="">
      <ContextProvider>
        <PagesWarapper></PagesWarapper>
      </ContextProvider>
    </div>
  );
}

export default App;
