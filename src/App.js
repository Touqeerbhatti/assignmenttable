import React, { useState,Fragment } from "react";
import './App.css' ;
import initialState from "./Data";


const App=(props)=>
{
  const[input,setinput]=useState(initialState);
  const[items,setitems]=useState([]);

  const itemevent=(e)=>{
    return(
        setinput(e.target.value)
    )
  }
  const additems=(st)=>
  {
    return(
      setitems((olditems)=>
      {
        return([...olditems, {
          st,
          id: st.length + 1,
        },])
      })
    )
  }

  return(
  <>
  <table>  
    <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Course</th>
  </tr>
</table>
    {items.map((itemvalue)=>
    {
      return(
        <Fragment key={itemvalue.id}> 
        <table>
  <tr>
    <td>{itemvalue.fname}</td>
    <td>{itemvalue.lname}</td>
    <td>{itemvalue.course}</td>
  </tr>
</table>
</Fragment>)
    })}
    

<br/>
    <input type="text" placeholder="Enter Fname" onChange={itemevent} />
    <input type="text"  placeholder="Enter Lname" onChange={itemevent} />
    <input type="text"  placeholder="Enter Course" onChange={itemevent} />
    <input type="button" value="ADD" onClick={additems} />
  </>
)
}

export default App;