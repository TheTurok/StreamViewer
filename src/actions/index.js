import axios from 'axios';

export const FETCH_LIVE = 'fetch_live';
export const ROOT_URL = 'https://www.googleapis.com/youtube/v3/liveBroadcasts';

export function fetchLiveBroadcasts(){
  const request = axios.get(`${ROOT_URL}?part=contentDetails&broadcastStatus=active`);

  return{
    type: FETCH_LIVE,
    payload: request
  };
}
