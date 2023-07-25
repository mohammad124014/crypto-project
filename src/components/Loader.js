import React from "react";
import spinner from "../assets/gif/spinner.gif";

const Loader = () => {
  return (
    <div style={{marginTop:'20px'}}>
      <img src={spinner} alt="spinner" style={{width:'80px' , marginBottom : '15px'}}/>
      <h2>Loading ...</h2>
    </div>
  );
};

export default Loader;
