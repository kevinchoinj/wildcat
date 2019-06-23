import React from 'react';
import MenuButton from 'menu/MenuButton.js';
import MenuPanel from 'menu/MenuPanel.js';
import MenuBar from 'menu/MenuBar.js';

const Menu = () => {
  return(
    <div>
      <MenuBar/>
      <MenuButton/>
      <MenuPanel/>
    </div>
  );
};

export default Menu;