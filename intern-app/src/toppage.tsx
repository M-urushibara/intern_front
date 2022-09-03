import React from 'react';
import {TimeLine} from './timeline'
import {Header} from './header'
import {Sidemenue} from './sidemenue'


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

