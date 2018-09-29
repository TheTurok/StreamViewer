import { combineReducers } from 'redux';
import LiveStreams from './reducer_liveStreams';

const rootReducer = combineReducers({
  liveStreams: LiveStreams
});

export default rootReducer;
