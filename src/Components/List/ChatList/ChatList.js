import React from 'react'
import "./chatList.css";
import { useState } from 'react';

const ChatList=() =>{

  const [addMode , setaddMode]= useState(false)
  return (
    <div
    className='chatlist'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='search here' />
        </div>
        <img src={addMode ? "./minus.png":"./plus.png" }alt="" className='add'
        onClick={()=>setaddMode((prev)=>!prev)}/>
      
      </div>

      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>john Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList;
