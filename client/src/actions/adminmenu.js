export const TOGGLE_ADMIN_MENU = Symbol('TOGGLE_ADMIN_MENU');

export const toggleAdminMenu = (menuDisplay) => {
  return{
    type: TOGGLE_ADMIN_MENU,
    menuDisplay
  };
};
