import React from 'react';

import MenuButton from './MenuButton.js';
import MenuPanel from './MenuPanel.js';
import MenuBar from './MenuBar.js';

export default class Menu extends React.Component{
  render(){
    return(
      <div>
        <MenuBar/>
        <MenuButton/>
        <MenuPanel/>
      </div>
    );
  }
}
