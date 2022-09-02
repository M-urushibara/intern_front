import React from "react";
import "./App.css";
import {Header} from './components/header'
import {ProductPage} from './components/productpage'

export const App = () =>{
  return (
    <div >
        <Header/>
      <main className="main">
        <div className = "page">
          <ProductPage/>
        </div>
      </main>
    </div>
  );
}