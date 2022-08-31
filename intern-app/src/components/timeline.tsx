import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { ImageList, ImageListItem} from '@mui/material';
import {Listen} from './listen' 
//json取得部分と表示させる部分を別コンポーネントにしたかった



type Post = {
  url:string;
  /*article_id:number;
  main_image:string;*/
}

export const TimeLine = () => {
  const urlAPI = 'https://jsonplaceholder.typicode.com/photos';
   const [datas, setDatas] = useState([]);
   console.log(axios.defaults.baseURL)
   useEffect( () => {
     axios.get(urlAPI).then(response => 
       setDatas(response.data)).catch(error => console.log(error))
   },[])
   console.log(datas)

   
   return (
     <div className="Apple">
       <ImageList sx={{ width: 1, height: 1}} cols={3}>
         {datas.map((data :Post,index) => (
          <ImageListItem style={{ margin:"10%"}}>
            <img src={data.url}/>
          </ImageListItem>
         ))}
      </ImageList>
     </div>
   );
}

//作成時間昇順に並べる？