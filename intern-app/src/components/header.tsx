import React from 'react';
import './/App.css'

export const Header = () =>{

  return(
    <>
      <header className="header">
        <div>
          <button className="button">新規会員登録</button>
          <button className="button">ログイン</button>
        </div>
      </header>
    </>
  );
}

