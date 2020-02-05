import pages from 'reducers/pages';
import { reducer as reducerForm } from 'redux-form';
import images from 'reducers/images';
import transition from 'reducers/transition';
import contact from 'reducers/contact';

import {createSelector} from 'reselect';

import {pageData} from 'data/pageData';

const reducers={
  pages,
  form: reducerForm,
  images,
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
    if (loadedContent[pageData.sessionsOneLink]) {
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
    if (loadedContent[pageData.sessionsTwoLink]) {
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
    if (loadedContent[pageData.sessionsThreeLink]) {
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

/* contact */
export const selectContactContactSending = (state) =>  state.contact.contactSending;