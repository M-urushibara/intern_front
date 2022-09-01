import React from 'react';
import './App.css'

export const Search = () =>{
  return(
    <div >
      <form method="get" action="#" className="search_container">
        <input type="text"  placeholder="　キーワード検索"/>
        <a ><input type="submit" value="検索"/></a>
      </form>
    </div>
  );
}