import {FETCH_LIVE} from '../actions';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_LIVE:
      return action.payload;
  default:
    return state;
  }
}
