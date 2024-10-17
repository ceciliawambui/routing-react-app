import React from 'react'

function Button() {
    let handleClick =()=>{
        alert("Button clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Button