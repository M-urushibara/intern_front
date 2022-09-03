/* eslint-disable jsx-a11y/alt-text */
import React,{ useState, useEffect } from 'react';
import axios from 'axios';

type Get = {
    main_image:string,
    product_name:string,
    product_price:number,
    official_link:string,
    product_explain_text:string
}

export const ProductPage :React.FC = (props) => {
    const urlAPI = 'http://localhost:3001/articles/'
    const Id= '1'

     const [datas, setDatas] = useState([]);
     console.log(axios.defaults.baseURL)
     useEffect( () => {
       axios.get(urlAPI+Id).then(response =>
         setDatas(response.data)).catch(error => console.log(error))
     },[])
     console.log(datas)

     const data:Get = datas;

     return(
        <>
        <div className="img">
            <img src={data.main_image}></img>
        </div>
        <div className="name">
            <p>{data.product_name}</p>
        </div>
        <div className="price">
            <p>{data.product_price}</p>
        </div>
        <div className="link">
            <p>{data.official_link}</p>
        </div>
        <div className="explain">
            <p>{data.product_explain_text}</p>
        </div>
        </>
    )
}