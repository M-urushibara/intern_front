import React,{ useState, useEffect } from 'react';
import Post from './posts.json'
import axios from 'axios';

type Post = {
  url:string;
  /*article_id:number;
  main_image:string;*/
}

export const App = () => {
  const urlAPI = 'https://jsonplaceholder.typicode.com/photos';
   const [datas, setDatas] = useState([]);
   console.log(axios.defaults.baseURL)
   useEffect( () => {
     axios.get(urlAPI).then(response => 
       setDatas(response.data)).catch(error => console.log(error))
   },[])
   console.log(datas)

  const inline ={
    display:"inline-block",
    width:"33%",
    height:"20%"
  };

   
   return (
     <div className="App">
       <h1>Axios Test</h1>
       
         {datas.map((data :Post,index) => (
          
            <img style={inline} src={data.url}></img>
          
         ))}
      
     </div>
   );

  /*const [resultTxt, setResultTxt] = useState([]);

  useEffect(() =>{
	axios.get("./components/posts.json").then((res)=>{
    console.log(res);
    if(res.status !== 200){
      throw new Error("APIがうまく動作していないようです");
    }
    let getstr = res.data.results[0];

    setResultTxt(
      '${getstr.article_id}\n${getstr.maine_image}'
    );
	}).catch((err)=> 
setResultTxt(`データがうまく取得できませんでした。${err}`)
);
})

return(
<div>
  <img src={resultTxt} />
</div>
);*/
}

//作成時間昇順に並べる