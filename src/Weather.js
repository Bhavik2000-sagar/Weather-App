import React, { useState } from "react";
import { getWeather } from "./Api";
import Left from "./Left_side";



const Weather = () => {
  const [city, setCity] = useState("Ahmedabad");
  const [temp,setTemp] = useState("");
  const [humi,setHumi] = useState("");

  const getInfo = async () => {
    const data = await getWeather(city);
    console.log(data);
    setTemp(data.temp);
    setHumi(data.humidity);
    console.log(data.humidity);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        width: "100%",
        height: "600px",
        background: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(5px)",
        border: "4px solid rgba(255, 255, 255, 0.18)",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Left city={city} setCity={setCity} getInfo={getInfo} temp={temp} humi={humi}/>
      
    </div>
  );
};

export default Weather;
