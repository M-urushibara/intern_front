/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import axios from "axios";
import React,{ useState, useEffect } from 'react';


export const ProductPage = () =>{
        const urlAPI = '';
        const [datas, setData] = useState([]);
        console.log(axios.defaults.baseURL)
        useEffect( () => {
          axios.get(urlAPI).then(response =>
            setData(response.data)).catch(error => console.log(error))
        },[])
        console.log(datas)

            return (
              <>
                {datas.map((data) => {
                  return (
                  <div>
                    <div className="name">
                      <p>{ data.product_name }</p>
                    </div>
                    <div className="explain">
                      <p>{ data.product_explain }</p>
                    </div>
                    <div className="price">
                      <p>{ data.price }</p>
                    </div>
                    <div className="link">
                      <p>{ data.official_link }</p>
                    </div>
                    <div className="img">
                      <a href=''> <img  className="img" src={data.main_img}/> </a>
                    </div>
                  </div>
                  )
                })}
              </>

            )
          }