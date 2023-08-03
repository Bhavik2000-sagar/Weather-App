import React from "react";

const Search = ({setCity, getInfo}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        placeholder="Search"
        onChange={(e)=>setCity(e.target.value)}
        style={{
          width: "80%",
          height: "40px",
          backgroundColor: "transparent",
          color: "#fff",
          border: "1px solid white",
          outline: "0",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          padding: "0 7.5px",
          cursor:"pointer"
        }}
      />
      <span
        style={{
          width: "20%",
          margin: "auto",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <button
          style={{
            display: "block",
            height: "41px",
            border: "1px solid white",
            backgroundColor: "white",
            color: "black",
            fontWeight: "600",
            borderTopRightRadius:"10px",
            borderBottomRightRadius:"10px",
            cursor:"pointer"
          }}

          onClick={getInfo}
        >
          Search
        </button>
      </span>
    </div>
  );
};

export default Search;
