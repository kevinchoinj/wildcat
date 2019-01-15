import {
  GET_IMAGES_URLS_SUCCEEDED,
  HOVER_CUSTOM_IMAGE,
} from 'actions/images';

const DEFAULT_STATE={
  urlArray:[],
  currentlyHovered: null,
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case HOVER_CUSTOM_IMAGE:
    return {
      ...state,
      currentlyHovered: payload.payload,
    };
  case GET_IMAGES_URLS_SUCCEEDED:
    return {
      ...state,
      urlArray: payload.payload,
    };
  default:
    return state;
  }
};
