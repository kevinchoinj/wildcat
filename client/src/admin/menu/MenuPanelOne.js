import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuPanelOne extends React.Component{
  render(){
    const {
      menuDisplay,
    } = this.props;

    const menuClassName = classNames(
      'admin_mobile_menu_panel',
      {
        'admin_mobile_menu_panel--display':menuDisplay
      }
    );

    return(
      <div className = {menuClassName}>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.adminmenu.menuDisplay,
  }),
  dispatch => ({
  }),
)(MenuPanelOne);
