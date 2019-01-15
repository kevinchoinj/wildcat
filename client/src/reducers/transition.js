import {
  START_TRANSITION,
  LOAD_CONTENT,
} from 'actions/transition';

const DEFAULT_STATE={
  isFirstPage: true,
  transitionStatus: 'reset',
  loadedContent: [],
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case START_TRANSITION:
    state = {...state,
      transitionStatus: payload.transitionStatus};
    state = {...state,
      isFirstPage: false};
    return state;
  case LOAD_CONTENT:
    return {
      ...state,
      loadedContent: {
        ...state.loadedContent,
        [payload.location]: payload.loadStatus,
      }
    };
  default:
    return state;
  }
};
