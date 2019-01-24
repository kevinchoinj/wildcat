import pages from 'reducers/pages';
import scroll from 'reducers/scroll';
import { reducer as reducerForm } from 'redux-form';
import images from 'reducers/images';
import adminmenu from 'reducers/adminmenu';
import admin from 'reducers/admin';
import authentication from 'reducers/authentication';
import transition from 'reducers/transition';
import contact from 'reducers/contact';

import {createSelector} from 'reselect';

const reducers={
  pages,
  scroll,
  authentication,
  form: reducerForm,
  images,
  adminmenu,
  admin,
  transition,
  contact,
};

export default reducers;

/* transition */
export const selectTransitionStatus = (state) => state.transition.transitionStatus;
export const selectLoadedContent = (state) => state.transition.loadedContent;

export const selectTransitionInProgress = createSelector(
  selectTransitionStatus,
  (transitionStatus) => {
    if (transitionStatus === 'start' || transitionStatus === 'end') {
      return true;
    }
    else {
      return false;
    }
  }
);

export const selectLoadedContentHome = createSelector(
  selectLoadedContent,
  (loadedContent) => {
    if (loadedContent === '/') {
      return true;
    }
    else {
      return false;
    }
  }
);
