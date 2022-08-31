import React from 'react';
import { Grid } from '@mui/material';
import {TimeLine} from './components/timeline'
import {Search} from './components/search'
import {Category} from './components/category'
import {User} from './components/user'
import './components/App.css'

export const App = () =>{

  return(
    <>
      <header className="header">
        <div>
          <button className="button">新規会員登録</button>
          <button className="button">ログイン</button>
        </div>
      </header>
      <main className="main">
        <div>
          <TimeLine/>
        </div>
      </main>
    
    </>
  );
}

