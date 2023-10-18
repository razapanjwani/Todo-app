"use client"
import { createClient } from "@vercel/postgres";
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Todos({data,showingNames,deleteTodos}) {
    const [timer,setTimer] = useState(null)

    function click(event) {
        if(event.detail == 1){
          setTimer(setTimeout(() => {
              showingNames(data.userId)
          }, 500))
        }
        else if(event.detail === 2){
            clearTimeout(timer)
            setTimer(setTimeout(() => {
                deleteTodos(data.id)
            }, 200))
        } else{
            clearTimeout(timer)
            return
        }
      }
        
    return(
        <>
            <ul>
                <li onClick={(event)=>{click(event)}}>{data.title}</li>
            </ul>
        </>
       
    )
}