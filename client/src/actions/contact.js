import {history} from 'store';

export const POST_CONTACT_STARTED = Symbol('POST_CONTACT_STARTED');
export const POST_CONTACT_SUCCEEDED = Symbol('POST_CONTACT_SUCCEEDED');
export const POST_CONTACT_FAILURE = Symbol('POST_CONTACT_FAILURE');

const postContactStarted = request => ({type: POST_CONTACT_STARTED, request});
const postContactSucceeded = data => ({type: POST_CONTACT_SUCCEEDED, data});
const postContactFailure = (data, error) => ({type: POST_CONTACT_FAILURE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function postData(data, path) {
  return () => {
    return fetch(path,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  };
}

export function postContact(values, path) {
  return (dispatch) => {
    dispatch(postContactStarted());
    return dispatch(postData(values, path))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(postContactSucceeded(json));
        history.push('/message-success');
      })
      .catch(error => {
        dispatch(postContactFailure(error));
        history.push('/message-failure');
      });
  };
}
