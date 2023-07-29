import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>parent</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    <Child count={count}/>  
    </div>
  )
}

export default Parent
