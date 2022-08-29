import React from "react";
import Header from "../components/header/header"
 import Footer from "../components/footer/Footer"
//import { Outlet } from "react-router-dom";

export default function Layout (props)
{
    return(


        <div className="App">
       <Header/>
 <p>{props.children}</p>
          <Footer/>
      </div>
    );
}