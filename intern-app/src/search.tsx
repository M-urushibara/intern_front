import React ,{ useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css'

export const Search = () =>{
  const [text, setText] = useState("");

  return(
    <div >
      <form method="get" action="#" className="search_container">
        <input type="text"  value={text} placeholder="　キーワード検索" onChange={(event) => setText(event.target.value)}/>
        <Link to="/searchtl"><input type="submit" value="検索"/></Link>
      </form>
    </div>
  );
}