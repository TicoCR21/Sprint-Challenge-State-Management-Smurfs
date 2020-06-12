import { FETCH_SMURFS, FETCHING_SMURFS, FETCH_ERROR } from "../actions/smurfsFetchActions";
import { SENDING_SMURF, SEND_SMURF_SUCCESS, SEND_ERROR } from "../actions/smurfSendActions";
import { REMOVE_SMURF } from "../actions/smurfRemoveActions";

const initialState = { 
                        smurfs : [], 
                        fetchLoading : false,
                        fetchError : false,
                        fetch : false 
                      };

export const smurfsReducer = ( state = initialState, action ) => 
{
  switch( action.type )
  {
    case FETCH_SMURFS:
      return { smurfs : action.payload , fetchLoading : false, fetchError : false, fetch : false };
    case FETCHING_SMURFS:
      return { smurfs : [ ...state.smurfs ], fetchLoading : true, fetchError : false, fetch : false };
    case FETCH_ERROR:
      return { smurfs : [ ...state.smurfs ], fetchLoading : false, fetchError : true, fetch : false };

    case SENDING_SMURF:
      return { smurfs : [ ...state.smurfs ], fetchLoading : false, fetchError : false, fetch : false };
    case SEND_SMURF_SUCCESS:
      return { smurfs : [], fetchLoading : false, fetchError : false, fetch : true };
    case REMOVE_SMURF:
      return { smurfs : [], fetchLoading : false, fetchError : false, fetch : true };
    case SEND_ERROR:
    default:
      return state;
  }
}