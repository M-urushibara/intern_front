import { textAlign } from '@mui/system';
import React ,{ useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import SearchTL from './searchtl'
import App from'./App'


export const Search = () =>{
  const [text, setText] = useState("");


  return(
    <div >
      <form method="get" action="#" className="search_container">
        <input type="text"  value={text} placeholder="　キーワード検索" onChange={(event) => setText(event.target.value)}/>
        <Link to="/not"><input type="submit" value="検索"/></Link>
        <SearchTL/>
      </form>
    </div>


  );
}