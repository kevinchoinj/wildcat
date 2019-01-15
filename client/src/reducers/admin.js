import {
  GET_STATS_SUCCEEDED,
  GET_STYLE_SUCCEEDED,
  GET_SESSIONS_SUCCEEDED,

  GET_FIREBASE_SUCCEEDED,
} from 'actions/admin';

const DEFAULT_STATE={
  aboutStats: [],
  aboutStyle: [],
  aboutSessions: [],

  aboutText: [],
  images: [],
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case GET_FIREBASE_SUCCEEDED:
    if (payload.payload.about) {
      state = {...state, aboutText: payload.payload.about};
    }
    if (payload.payload.images) {
      state = {...state, images: payload.payload.images.customs};
    }
    return state;
  case GET_STATS_SUCCEEDED:
    return {
      ...state,
      aboutStats: payload.payload,
    };
  case GET_STYLE_SUCCEEDED:
    return {
      ...state,
      aboutStyle: payload.payload,
    };
  case GET_SESSIONS_SUCCEEDED:
    return {
      ...state,
      aboutSessions: payload.payload,
    };
  default:
    return state;
  }
};


