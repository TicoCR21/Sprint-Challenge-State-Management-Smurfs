import React from "react";

export default function( props )
{
  return(
    <div className = "villagers" >
      <ul>
        { props.smurfs.map( smurf => <li key={ smurf.name }> { smurf.name }</li> ) }
      </ul>
    </div>
  );
}