import React from 'react';
import './App.css'

export const Search = () =>{
  return(
    <div >
      <form method="get" action="#" className="search_container">
        <input type="text"  placeholder="　キーワード検索"></input>
        <input type="submit" value="検索"></input>
      </form>
    </div>
  );
}