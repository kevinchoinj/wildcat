export const START_TRANSITION = Symbol('START_TRANSITION');
export const LOAD_CONTENT = Symbol('LOAD_CONTENT');

export const startTransition = (transitionStatus) => {
  return{
    type: START_TRANSITION,
    transitionStatus,
  };
};

export const loadContent = (location, loadStatus) => {
  return{
    type: LOAD_CONTENT,
    location,
    loadStatus,
  };
};
