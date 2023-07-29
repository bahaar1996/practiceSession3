import React from 'react'
const Card = ({data,distpatch}) => {
  return (
    <div style={{border:"1px solid"}}>
      <p style={{color:data.isVisible===false?'red':'green'}}>{`${data.name}    ${data.price}`}</p>
      <button onClick={()=>distpatch({type:"setVisible", payload:{id: data.id}})}>change visibility</button>
      <button onClick={()=>distpatch({type:"deleted" , payload:{id:data.id}})}>delete</button>
    </div>
  )
}

export default Card;
