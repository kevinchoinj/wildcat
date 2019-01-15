import fire from 'fire';

export const GET_IMAGES_URLS_SUCCEEDED = 'GET_IMAGES_URLS_SUCCEEDED';
export const GET_LIGHTBOX_URLS_SUCCEEDED = 'GET_LIGHTBOX_URLS_SUCCEEDED';
export const HOVER_CUSTOM_IMAGE = 'HOVER_CUSTOM_IMAGE';

const STORAGE_LOCATION = 'images';
const DATABASE_LOCATION = 'images/customs';

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

export function postImageUrl(data) {
  return (dispatch, getState) => {
    let name = data.name;
    let subtitle = data.subtitle;
    return fire.storage().ref(STORAGE_LOCATION).child(name).put(data.image[0])
      .then((snapshot) => {
        let storage = fire.storage().ref();

        storage.child(snapshot.metadata.fullPath).getDownloadURL().then((url) => {
          let fireContent  = getState().images.urlArray;
          let baseId = dispatch(generateId(fireContent)) + 1;
          let newId = baseId.toString();
          return fire.database().ref(DATABASE_LOCATION).update({
            [newId]: {'url': url, 'name': name, 'subtitle': subtitle}
          });
        });
      }).catch((error) => {
        console.log('One failed:', data, error.message);
        return error;
      });
  };
}

export function removeImageFile(name) {
  return () => fire.storage().ref(STORAGE_LOCATION).child(name).delete();
}

export function removeImageUrl(name) {
  return () => fire.database().ref(DATABASE_LOCATION)
    .child(name).remove();
}

export function getImageUrls() {
  return (dispatch) => {
    fire.database().ref(DATABASE_LOCATION).on('value', snapshot => {
      dispatch({
        type: GET_IMAGES_URLS_SUCCEEDED,
        payload: snapshot.val()
      });
    });
  };
}

export function sendListDatabase (list){
  return () => {
    return fire.database().ref(DATABASE_LOCATION).set(
      list
    );
  };
}

export const hoverCustomImage = (imageUrl) => {
  return {
    type: HOVER_CUSTOM_IMAGE,
    payload: imageUrl
  };
};
