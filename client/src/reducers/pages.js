import {
  TOGGLE_MENU,
} from 'actions/pages';

const DEFAULT_STATE={
  menuDisplayed: false,
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case TOGGLE_MENU:
    return {...state, menuDisplayed: payload.menuDisplayed};
  default:
    return state;
  }
};
