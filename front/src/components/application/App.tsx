import React from 'react';
import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import BeautyFileUpload from "./components/beuty/BeautyFileUpload";
import Page404 from "./components/404/Page404";
import './App.css';


function App() {
  return (
      <BrowserRouter>
          <Routes>
              {/*  DEFAULT PAGE  */}
              <Route path={"/"} element={<Navigate to={"/upload"}/>}/>

              <Route path={"/upload"} element={<BeautyFileUpload/>}/>

              {/*  404 REDIRECT  */}
              <Route path={"*"} element={<Page404/>}/>
          </Routes>
      </BrowserRouter>

);
}

export default App;
