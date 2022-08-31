import React,{ useState, useEffect } from 'react';
import Post from './posts.json'
import axios from 'axios';

type Post = {
  name:string;
  /*article_id:number;
  main_image:string;*/
}

export const App = () => {
  const urlAPI = 'https://jsonplaceholder.typicode.com/users';
   const [datas, setDatas] = useState([]);
   console.log(axios.defaults.baseURL)
   useEffect( () => {
     axios.get(urlAPI).then(response => 
       setDatas(response.data)).catch(error => console.log(error))
   },[])
   console.log(datas)
   
   return (
     <div className="App">
       <h1>Axios Test</h1>
       <ul>
         {datas.map((data :Post,index) => (
           <li key={index}>{data.name}</li>
         ))}
       </ul>
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