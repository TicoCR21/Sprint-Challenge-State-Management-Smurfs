import React from "react";

export default function( props )
{
  return(
    <div className = "gifContainer" >
      <h2 className = "gifMessage" >{ props.loading ? "Loading..." : "Something Went Wrong!!!" }</h2>
      <img src = { require( props.loading ? "../images/loading.gif" : "../images/error.gif" ) } alt = "GIF..." />
    </div>
  );
}