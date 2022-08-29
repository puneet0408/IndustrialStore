import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Main/main";
import OurProduct from "./components/Product/Mainfile";
import TeaM from "./components/team/Team";
import About from "./components/About/About";
import Contact from "./components/contact/contact";
import "./app.css";
 
import { Grid } from "react-loader-spinner";
import './app.css'
 import Layout from "./layout/layout";
 

export default function App() {

  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
      response.json()
    );
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Grid color="#00BFFF" height={550} width={100} />
        </div>
      ) : (
        <div>
         <Layout>
          <Routes>
            <Route index  element={<Home/>} />
            <Route path="/ourproduct" element={<OurProduct/>} />
            <Route path="/teaM" element={<TeaM/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>}/>
 
          </Routes>
          </Layout>
         </div>
      )}
    </div>
     
  );
}