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

import {pageData} from 'data/pageData';

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
    if (loadedContent[pageData.homeLink]) {
      return true;
    }
    else {
      return false;
    }
  }
);
export const selectLoadedContentSessions = createSelector(
  selectLoadedContent,
  (loadedContent) => {
    if ((loadedContent[pageData.sessionsOneLink]) || (loadedContent[pageData.sessionsTwoLink]) || (loadedContent[pageData.sessionsThreeLink])) {
      return true;
    }
    else {
      return false;
    }
  }
);
export const selectLoadedContentSessionsOne = createSelector(
  selectLoadedContent,
  (loadedContent) => {
    if (loadedContent[pageData.sessionsOne]) {
      return true;
    }
    else {
      return false;
    }
  }
);
export const selectLoadedContentSessionsTwo = createSelector(
  selectLoadedContent,
  (loadedContent) => {
    if (loadedContent[pageData.sessionsTwo]) {
      return true;
    }
    else {
      return false;
    }
  }
);
export const selectLoadedContentSessionsThree = createSelector(
  selectLoadedContent,
  (loadedContent) => {
    if (loadedContent[pageData.sessionsThree]) {
      return true;
    }
    else {
      return false;
    }
  }
);

/* images */
export const selectImagesCurrentlyHovered = (state) => state.images.currentlyHovered;

/* pages */
export const selectPagesMenuDisplayed = (state) => state.pages.menuDisplayed;