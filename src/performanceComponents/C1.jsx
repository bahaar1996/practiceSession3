import React from 'react'
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'
import C2 from './C2';
import ResetButton from './ResetButton';

const C1 = () => {
    const[address,setAddress]=useState("");
    const[password,setPassword]=useState("");
    const addressChangeHandler =(e)=>{
        setAddress(e.target.value)
    }
    const passwordChangeHandler=(e)=>{
        setPassword(e.target.value)
    }
    const f =useMemo(()=>{heavyFunction()},[password]);  
    const reset =useCallback(()=>{
      setPassword("")
    },[])
  return (
    <div>
      <input onChange={addressChangeHandler} value={address}/>
      <input type="password" onChange={passwordChangeHandler} value={password}/>
      <C2 addr ={address}/>
      <ResetButton reset={reset}/>
    </div>
  )
}

export default C1

const heavyFunction=()=>{
    console.log("heavyfunction executed in c1...")
    for(let i =0;i<2000000;i++){
        new Date();
    }
}