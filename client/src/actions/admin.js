import fire from 'fire';

export const GET_STATS_SUCCEEDED = 'GET_STATS_SUCCEEDED';
export const GET_STYLE_SUCCEEDED = 'GET_STYLE_SUCCEEDED';
export const GET_SESSIONS_SUCCEEDED = 'GET_SESSIONS_SUCCEEDED';
export const GET_FIREBASE_SUCCEEDED = 'GET_FIREBASE_SUCCEEDED';

const STATS_LOCATION = '/about/stats';
const STYLE_LOCATION = '/about/fightstyle';
const SESSIONS_LOCATION = '/about/sessiontype';

export function getFireBaseStorage() {
  return (dispatch) => {
    fire.database().ref('/').on('value', snapshot => {
      dispatch({
        type: GET_FIREBASE_SUCCEEDED,
        payload: snapshot.val()
      });
    });
  };
}

function generateId(objects) {
  return () => {
    if (objects){
      let fireContent = Object.keys(objects);
      let contentLength = fireContent.length;
      if (contentLength === 0) {
        return 0;
      }
      else if (contentLength === 1) {
        return 1;
      }
      else {
        return parseInt(fireContent[contentLength - 1], 10);
      }
    }
  };
}

function postText(objects, location, values) {
  return (dispatch) => {
    let baseId = dispatch(generateId(objects)) + 1;
    let newId = baseId.toString();
    return fire.database().ref(location).update({
      [newId]: values
    });
  };
};

/*======================================
=                STATS                =
======================================*/

export function getStatsText() {
  return (dispatch) => {
    fire.database().ref(STATS_LOCATION).on('value', snapshot => {
      dispatch({
        type: GET_STATS_SUCCEEDED,
        payload: snapshot.val()
      });
    });
  };
};
export function postStatsText(values) {
  return (dispatch, getState) => {
    let currentObjects = getState().admin.aboutStats;
    dispatch(postText(currentObjects, STATS_LOCATION, values));
  };
};
export function removeStatsText(name) {
  return () => fire.database().ref(STATS_LOCATION)
    .child(name).remove();
}
export function sendStatsText (list){
  return () => {
    return fire.database().ref(STATS_LOCATION).set(
      list
    );
  };
}

/*======================================
=            FIGHT STYLE              =
======================================*/
export function getStyleText() {
  return (dispatch) => {
    fire.database().ref(STYLE_LOCATION).on('value', snapshot => {
      dispatch({
        type: GET_STYLE_SUCCEEDED,
        payload: snapshot.val()
      });
    });
  };
};
export function postStyleText(values) {
  return (dispatch, getState) => {
    let currentObjects = getState().admin.aboutStyle;
    dispatch(postText(currentObjects, STYLE_LOCATION, values));
  };
};
export function removeStyleText(name) {
  return () => fire.database().ref(STYLE_LOCATION)
    .child(name).remove();
}
export function sendStyleText (list){
  return () => {
    return fire.database().ref(STYLE_LOCATION).set(
      list
    );
  };
}
/*======================================
=           SESSION TYPE              =
======================================*/
export function getSessionsText() {
  return (dispatch) => {
    fire.database().ref(SESSIONS_LOCATION).on('value', snapshot => {
      dispatch({
        type: GET_SESSIONS_SUCCEEDED,
        payload: snapshot.val()
      });
    });
  };
};
export function postSessionsText(values) {
  return (dispatch, getState) => {
    let currentObjects = getState().admin.aboutSessions;
    dispatch(postText(currentObjects, SESSIONS_LOCATION, values));
  };
};
export function removeSessionsText(name) {
  return () => fire.database().ref(SESSIONS_LOCATION)
    .child(name).remove();
}
export function sendSessionsText (list){
  return () => {
    return fire.database().ref(SESSIONS_LOCATION).set(
      list
    );
  };
}