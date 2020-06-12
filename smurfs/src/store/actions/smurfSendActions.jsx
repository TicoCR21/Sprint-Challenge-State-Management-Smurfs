import axios from "axios";

export const SEND_SMURF_SUCCESS = "SEND_SMURF_SUCCESS";
export const SENDING_SMURF = "SENDING_SMURF";
export const SEND_ERROR = "SEND_ERROR";


export const sendSmurf = ( smurf ) => dispatch =>
{
  dispatch( { type : SENDING_SMURF } );
  axios.post( "http://localhost:3333/smurfs", smurf )
    .then( response => dispatch( { type : SEND_SMURF_SUCCESS } ) )
    .catch( error => dispatch( { type : SEND_ERROR } ) )
}