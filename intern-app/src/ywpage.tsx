import React from 'react'
import {TimeLine} from './timeline'
import {Header} from './header'

const Ye: React.FC= () => {
    return (
      <>
      <Header/>
      
      <main className="main2">
        <h1 className="center"> イエローベース</h1>
        <TimeLine/>
        </main>
      </>
    );
  };
  
export default Ye