import React from 'react'
import {BiLocationPlus} from "react-icons/bi"

const Icondiv = ({city,temp, humi}) => {
  return (
    <div style={{height:"100%" , display:"flex",padding:"0 60px"}}>
        <div style={{display:"flex", alignItems:"center", fontSize:"110px"}}><BiLocationPlus style={{color:"#fff", opacity:"0.4"}}/></div>
        <div style={{width:"calc(100% - 110px)", display:"flex",alignItems:"center", flexDirection:"column", justifyContent:"center", gap:"7.5px"}}>
            <div style={{display:"flex" , alignItems:"flex-start", width:"100%", color:"#fff"}}>City: {city}</div>
            <div style={{display:"flex" , alignItems:"flex-start", width:"100%", color:"#fff"}}>Temp: {temp}&#8451;</div>
            <div style={{display:"flex" , alignItems:"flex-start", width:"100%", color:"#fff"}}>Humidity : {humi}</div>
        </div>
    </div>
  )
}

export default Icondiv