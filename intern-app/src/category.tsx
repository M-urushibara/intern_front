import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import './App.css'


  const Category: React.FC = () =>{
  
    return(
      <div>
        <Grid  className="categories">
            <h2>探す</h2>
            <Link to="/ywpage"><Grid className="categorynames">春</Grid> </Link>
            <Link to="/blpage"><Grid className="categorynames">夏</Grid> </Link>
            <Link to="/ywpage"><Grid className="categorynames">秋</Grid> </Link>
            <Link to="/blpage"><Grid className="categorynames">冬</Grid> </Link>
        </Grid>
      </div>
    );
  }
  
 
export default Category