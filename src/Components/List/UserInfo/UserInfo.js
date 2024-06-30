import React from 'react'
import "./userinfo.css";

function UseInfo() {
  return (
    <div className='userinfo'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>john doe</h2>
      </div>

      
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./edit.png" alt="" />
        <img src="./video.png" alt="" />
      </div>
    </div>
  )
}

export default UseInfo
