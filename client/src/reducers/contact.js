import {
  POST_CONTACT_STARTED,
  POST_CONTACT_SUCCEEDED,
  POST_CONTACT_FAILURE,
} from 'actions/contact';

const DEFAULT_STATE={
  contactSending: false,
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case POST_CONTACT_STARTED:
    return {
      ...state,
      contactSending: true,
    };
  case POST_CONTACT_SUCCEEDED:
    return {
      ...state,
      contactSending: false,
    };
  case POST_CONTACT_FAILURE:
    return {
      ...state,
      contactSending: false,
    };
  default:
    return state;
  }
};
