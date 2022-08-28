import React,{ useState, useEffect } from 'react';
import Post from './components/posts.json'
import axios from 'axios';

export const App = () => {
  const [resultTxt, setResultTxt] = useState("");
  
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

return(<div>
  <p>{resultTxt}</p>
</div>);
}

//作成時間昇順に並べる