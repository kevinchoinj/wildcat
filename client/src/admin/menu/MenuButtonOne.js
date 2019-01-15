import React from 'react';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as menuActions from 'actions/adminmenu';

class MenuButton extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleAdminMenu(!this.props.menuDisplay);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;

    const buttonName = classNames({
      'admin_mobile_menu_button__container': true,
      'admin_mobile_menu_button__container--displayed': menuDisplay,
    });
    return(
      <div
        onClick = {this.toggleMenu}
        className = "admin_mobile_menu_button"
      >
        <div className = {buttonName}>
          <span className = "admin_mobile_menu_button__line"/>
          <span className = "admin_mobile_menu_button__line"/>
          <span className = "admin_mobile_menu_button__line"/>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplay:state.adminmenu.menuDisplay,
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
  }),
)(MenuButton);