"use client"
import Image from 'next/image'
import React,{useState} from 'react';
import {ToastContainer,toast} from "react-toastify"
import Todos  from '@/app/todo';
import Button from './button';

export default function Home() {
  const [Data,setData] = useState(null)
    const [isLoading,setLoading] = useState(false)
    const [User,setUser] = useState(null)

    async function fetchingUrl(url) {
        try{
            setLoading(true)
            const res = await fetch(url)
            if(!res.ok) throw Error("not found")
            let data = await res.json()
             setLoading(false)
            return data
        } catch(error){
            alert(error)
        };
    }
    async function fetchingTitle(){
      let todoArr= await fetchingUrl("https://jsonplaceholder.typicode.com/todos")
      return todoArr
  }
  async function fetchingUser() {
      let userArr = await fetchingUrl("https://jsonplaceholder.typicode.com/users")
      return userArr
  } 
    function deleteTodos(id) {
        let updatedTodo= Data.filter((todoObj)=> todoObj.id != id)
        return setData(updatedTodo)
    }
     
    function showingNames(id) {
                {User && User.filter((user)=>{
                    if(user.id === id){
                        toast(`name:${user.name}   Email:${user.email}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                    }
                })} 
        }
    async function handleClick() {
      let x = await fetchingTitle() 
      
      setData(x)
      let y = await fetchingUser()
      setUser(y)
      
    }
    
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <div className='mainDiv'>
      <Button onClick={handleClick} disabled={isLoading}/>
    </div>  
      {Data && Data.map((items)=>{

        return <Todos data={items} showingNames={showingNames} deleteTodos={deleteTodos}/>
      })}
      
    </>
  )
}
