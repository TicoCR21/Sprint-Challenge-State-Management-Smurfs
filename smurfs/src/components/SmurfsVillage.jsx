import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/smurfsFetchActions";
import { sendSmurf } from "../store/actions/smurfSendActions";
import { removeSmurf } from "../store/actions/smurfRemoveActions";
import LoadingError from "./LoadingError";
import DisplaySmurfs from "./DisplaySmurfs";

const smurftSendInitialState = { name : "", age : "", height : "" };

const SmurfsVillage = props =>
{
  const [ newVillager, setNewVillager ] = useState( smurftSendInitialState );
  const [ removeVillager, setRemoveVillager ] = useState( "" );

  useEffect( () => props.fetchSmurfs(), [ ] );

  if( props.smurfsData.fetch ) props.fetchSmurfs();
    
  const onChange = e => setNewVillager( { ...newVillager, [ e.target.name ]: e.target.value } );
   
  const onSubmit = e =>
  {
    e.preventDefault();
    props.sendSmurf( { ...newVillager, height : newVillager.height + "cm" } );
    setNewVillager( smurftSendInitialState );
  }

  const onSubmitVillager = e =>
  {
    e.preventDefault();

    let x = props.smurfsData.smurfs.filter( smurf => smurf.name.trim().toLowerCase() === removeVillager.trim().toLowerCase() );
    if( x.length > 0 )
      props.removeSmurf( x[ 0 ].id );
    setRemoveVillager( removeVillager );
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

      <h2 className = "smurfsVillargers" >Excile Villager</h2>
      <div className = "formContainer">
        <form onSubmit = { onSubmitVillager } >
          <input type = "text" name = "name" onChange = { e => setRemoveVillager( e.target.value ) } value = { removeVillager } placeholder = "Enter Name" />
          <button>Remove Smurf</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => { return { smurfsData : state.smurfsReducer } };

export default connect( mapStateToProps, { fetchSmurfs, sendSmurf, removeSmurf } )( SmurfsVillage );