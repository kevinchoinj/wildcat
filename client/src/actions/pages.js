export const TOGGLE_MENU = Symbol('TOGGLE_MENU');

export const toggleMenu = (menuDisplayed) =>{
  return{
    type: TOGGLE_MENU,
    menuDisplayed,
  };
};