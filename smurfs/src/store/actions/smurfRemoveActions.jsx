import axios from "axios";

export const REMOVING_SMURF = "REMOVING_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";

export const removeSmurf = id => dispatch =>
{
  dispatch( { type : REMOVING_SMURF } );
  axios.delete( `http://localhost:3333/smurfs/${ id }` )
    .then( response => dispatch( { type : REMOVE_SMURF } ) )
    .catch( error => dispatch( { type : "REMOVE_ERROR" } ) )
}