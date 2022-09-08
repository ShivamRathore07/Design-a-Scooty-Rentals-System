import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import style from "./Outlet.module.css"
import Button from 'react-bootstrap/Button';
import Data from "./localstroge"


const Outlet = () => {
   const [status,setStatus] = useState(false)

    let arr = JSON.parse(localStorage.getItem("bookcar"))
    var arr1 = JSON.parse(localStorage.getItem("bookcarData")) || []
    if(arr1.length===0){
      localStorage.setItem("bookcarData",JSON.stringify(arr))
      arr1=JSON.parse(localStorage.getItem("bookcarData"))
    } 
 
    useEffect(()=>{},[status]) 
 

  const handleClick=(i,j)=>{
     arr1[i].Outlet[j].status="Booked"
     arr1[i].Outlet[j].picked=false
     localStorage.setItem("bookcarData",JSON.stringify(arr1))
     console.log(JSON.parse(localStorage.getItem("bookcarData")))
     setStatus(!status)
  }
  return (
    <>
    {arr1.map((ele,index)=>{
      return <Accordion key={ele.Outlet.id} defaultActiveKey={index}>
      <Accordion.Item>
        <Accordion.Header>{`Outlet ${index+1}`}</Accordion.Header>
        <Accordion.Body>
          <table id={style.customers}>
            <thead>
              <tr>
                <th>Vehicles</th>
                <th>status</th>
                <th>Reserve the Vehicle</th> 
                <th>Pick up</th>                 
              </tr>
            </thead>
            <tbody>
                {ele.Outlet.map((elem,ind)=>(
                  <tr>
                    <td>{elem.car}</td>
                    <td style={{color:elem.status==="Available"?"green":"red"}}>{elem.status}</td>
                    <td><Button onClick={() => handleClick(index,ind)} variant="primary" disabled={elem.status==="Booked"} >Click To Book</Button></td>
                    <td><Button onClick={() => handleClick()} variant="primary">Pick up</Button></td>
                  </tr>
                ))} 
            </tbody>
        </table>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
    })}
    </>
  )
}

export default Outlet
 
