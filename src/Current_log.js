import React from "react";

const Current = () => {
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const currentTime = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock").textContent = currentTime;
  }

  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            color: "transparent",
            WebkitTextStroke: "1px #fff",
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          id="clock"
        ></div>
      </div>
    </>
  );
};

export default Current;
