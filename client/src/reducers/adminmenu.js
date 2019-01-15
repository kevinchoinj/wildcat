import {
  TOGGLE_ADMIN_MENU,
} from 'actions/adminmenu';

const DEFAULT_STATE={
  menuDisplay: null,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case TOGGLE_ADMIN_MENU:
    return state = {...state, menuDisplay:payload.menuDisplay};
  default:
    return state;
  }
};


