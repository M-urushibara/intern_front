import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { ImageList, ImageListItem, Button, StepIconClassKey} from '@mui/material';
import {Listen} from './listen' 
//json取得部分と表示させる部分を別コンポーネントにしたかった



type Post = {
  article_id:number;
  product_image_path:string;
  created_at:string;
} 



const SearchTL:React.FC <{keyword?: string;}> = (props) => {
  const urlAPI = 'http://localhost:3001/articles/search/'

   const [datas, setDatas] = useState([]);
   console.log(axios.defaults.baseURL)
   useEffect( () => {
     axios.get(urlAPI+props.keyword).then(response => 
       setDatas(response.data)).catch(error => console.log(error))
   },[])
   console.log(datas)

   
   return (
     <div className="Apple">
        {props.keyword}
     </div>
   );
}
export default SearchTL

 /*<ImageList sx={{ width: 1, height: 1}} cols={3}>
         {datas.map((data :Post,index) => (
          <ImageListItem key={data.article_id} style={{ margin:"10%"}}>
            <a href=''> <img  className="img" style={{width:"100%"}} src={data.product_image_path}/> </a>
          </ImageListItem>
         ))}
      </ImageList>*/