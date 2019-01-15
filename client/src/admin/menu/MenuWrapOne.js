import React from 'react';
import MenuButtonOne from 'admin/menu/MenuButtonOne';
import MenuPanelOne from 'admin/menu/MenuPanelOne';
import MenuTextOne from 'admin/menu/MenuTextOne';

class MenuWrapOne extends React.Component{
  render(){
    return(
      <div>
        <MenuButtonOne />
        <MenuPanelOne />
        <MenuTextOne />
      </div>
    );
  }
}

export default MenuWrapOne;