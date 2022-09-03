import React from 'react'
import {TimeLine} from './timeline'
import {Header} from './header'

const Bl:React.FC = () => {
    return (
    <>
    <Header/>
    <main className="main2">
      <h1 className="center"> ブルーベース</h1>
      <TimeLine/>
      </main>
    </>
    );
  };
export   default Bl
