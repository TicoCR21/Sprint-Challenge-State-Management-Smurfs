import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/smurfsFetchActions";
import { sendSmurf } from "../store/actions/smurfSendActions";
import LoadingError from "./LoadingError";
import DisplaySmurfs from "./DisplaySmurfs";

const smurftSendInitialState = { name : "", age : "", height : "" };

const SmurfsVillage = props =>
{
  const [ newVillager, setNewVillager ] = useState( smurftSendInitialState );

  useEffect( () => props.fetchSmurfs(), [ ] );

  if( props.smurfsData.fetch ) props.fetchSmurfs();
    
  const onChange = e => setNewVillager( { ...newVillager, [ e.target.name ]: e.target.value } );
   
  const onSubmit = e =>
  {
    e.preventDefault();
    props.sendSmurf( { name : "Shadow", age : 17, height : "49cm" } );
    setNewVillager( smurftSendInitialState );
  }

  return(
    <div className = "container" >
      <h1 className = "smurfsVillageTitle" >Smurfs Village</h1>
      <h2 className = "smurfsVillargers" >Current Villagers</h2>
      <div>
            { 
              props.smurfsData.fetchLoading ? <LoadingError loading = { true } /> : props.smurfsData.fetchError ? 
                <LoadingError loading = { false } /> : <DisplaySmurfs smurfs = { props.smurfsData.smurfs } />
            }
      </div>

      <h2 className = "smurfsVillargers" >Add Villagers</h2>
      <div className = "formContainer" >
        <form onSubmit = { onSubmit } >
          <input type = "text" name = "name" onChange = { onChange } value = { newVillager.name } placeholder = "Enter Name" />
          <input type = "number" name = "age" onChange = { onChange } value = { newVillager.age } placeholder = "Enter Age" />
          <input type = "text" name = "height" onChange = { onChange } value = { newVillager.height } placeholder = "Enter Height" />
          <button>Add Smurf</button>
        </form>
      </div>     
    
    </div>
  );
}

const mapStateToProps = state =>
{
  return { smurfsData : state.smurfsReducer };
}

export default connect( mapStateToProps, { fetchSmurfs, sendSmurf } )( SmurfsVillage );