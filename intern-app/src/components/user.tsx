import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import './App.css'


type Post = {
    username:string;
    /*article_id:number;
    main_image:string;*/
  }
  
  export const User = () =>{
    const urlAPI = 'https://jsonplaceholder.typicode.com/users';
    const [datas, setDatas] = useState([]);
    console.log(axios.defaults.baseURL)
    useEffect( () => {
      axios.get(urlAPI).then(response => 
        setDatas(response.data)).catch(error => console.log(error))
    },[])
    console.log(datas)
  
    return(
      <div>
        
        <Grid  className="users" >
            <h2>ユーザー</h2>
        {datas.map((data :Post,index) => (
                  <Grid className="usernames">{data.username}</Grid>
        ))}
              </Grid>
      </div>
    );
  }
  