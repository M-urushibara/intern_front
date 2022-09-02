/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import App from '../App';
import styles from '../styles/product_page.css';


function getData(path:string) {
    fetch(path).then(res=>res.json()).then(re=>{
        const data = JSON.parse(re)
   })

    return(
        <>
        <div className={styles.header}>
            <head>
                <title>商品ページ</title>
            </head>

        </div>
        <div className="main_img">
            <img src={`${data.main_img}`}></img>
        </div>
        <div className="prodcut_name">
            <p>{`${data.name}`}</p>
        </div>
        <div className="product_price">
            <p>{`${data.price}`}</p>
        </div>
        <div className="official_link">
            <p>{`${data.official_link}`}</p>
        </div>
        <div className="product_explain">
            <p>{`${data.explain}`}</p>
        </div>
        </>
    )
}

const path = ""
getData(path)

export default App;