import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchSmurfs = () => dispatch =>
{
  dispatch( { type : FETCHING_SMURFS } );
  axios.get( "http://localhost:3333/smurfs" )
    .then( response =>  dispatch( { type : FETCH_SMURFS, payload : response.data } ) )
    .catch( error => dispatch( { type : FETCH_ERROR } ) )
} 