import React from 'react';
import {TimeLine} from './components/timeline'
import {Header} from './components/header'
import {Sidemenue} from './components/sidemenue'
import './components/App.css'

export const TopPage = () =>{
  return (
    <div >
        <Header/>
      <main className="main">
        <div className = "item">
          <Sidemenue/>
        </div>
        <div className = "item">
          <TimeLine/>
        </div>
      </main>
    </div>
  );
}

