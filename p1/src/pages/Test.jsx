import React from 'react'
import { useParams } from 'react-router-dom';


const Test = () => {
    const {id,name}=useParams();
  return (
    <div>
      
     <h1> this is test page</h1>
     <h2> id {id}/{name}</h2>
    </div>
  )
}

export default Test;