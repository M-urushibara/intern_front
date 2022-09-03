import React from 'react';
import {TimeLine} from './timeline'
import {Header} from './header'
import {Sidemenue} from './sidemenue'
import './App.css'


/*export const App = () =>{
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
}*/

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Ye from "./ywpage";
import Bl from "./blpage"
import {TopPage} from "./toppage"

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<TopPage/>}/>
              <Route path="ywpage" element={<Ye />} />
              <Route path="blpage" element={<Bl />} />
              //<Route path="blpage" element={<Bl />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App


