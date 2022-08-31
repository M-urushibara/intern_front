import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { ImageList, ImageListItem} from '@mui/material';



type Post = {
  url:string;
  /*article_id:number;
  main_image:string;*/
}

export const Listen = () => {
  const urlAPI = 'https://jsonplaceholder.typicode.com/photos';
   const [datas, setDatas] = useState([]);
   console.log(axios.defaults.baseURL)
   useEffect( () => {
     axios.get(urlAPI).then(response => 
       setDatas(response.data)).catch(error => console.log(error))
   },[])
   console.log(datas)
}