import {
  HOVER_CUSTOM_IMAGE,
} from 'actions/images';

const DEFAULT_STATE={
  currentlyHovered: null,
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case HOVER_CUSTOM_IMAGE:
    return {
      ...state,
      currentlyHovered: payload.payload,
    };
  default:
    return state;
  }
};
