import React from 'react';
import {Search} from './search'
import Category from './category'
import {User} from './user'
import './App.css'


export const Sidemenue = () =>{
    return (
      <div className="side">
        <div className="side-top">
        <Search/>
        <Category/>
        </div>
        <div className="side-un">
        <User/>
        </div>
      </div>
    );
  }
  
