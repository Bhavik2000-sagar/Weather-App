import React from "react";
import Current from "./Current_log";
import Icondiv from "./Weather_icon";
import Search from "./Search";

const Left = ({city, setCity, getInfo ,temp, humi}) => {
  return (
    <div style={{ flex: "1 0 400px", height: "100%" , overflow:"hidden",borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px"}}>

      <div style={{height:"200px",borderTopLeftRadius:"20px"}}><Current /></div>

      <div style={{height:"200px"}}><Icondiv city={city} temp={temp} humi={humi}/></div>

      <div style={{height:"200px",borderBottomLeftRadius:"20px",padding:"0 80px"}}><Search setCity={setCity} getInfo={getInfo}/></div>

    </div>
  );
};

export default Left;
