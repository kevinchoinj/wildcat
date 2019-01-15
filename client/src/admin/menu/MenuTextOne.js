import React from 'react';
import {Link} from 'react-router-dom';
import * as menuActions from 'actions/adminmenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

class MenuTextOne extends React.Component{
  toggleMenu = () => {
    this.props.menuActions.toggleAdminMenu(false);
  }
  render(){
    const {
      menuDisplay,
    } = this.props;
    const menuClassName = classNames(
      'admin_mobile_menu_panel__links',
      {
        'admin_mobile_menu_panel__links--display': menuDisplay
      }
    );
    const menuValues = [
      {text: 'Admin Home', link: '/shodyra/admin'},
      {text: 'Edit Gallery', link: '/shodyra/admin/gallery'},
      {text: 'Edit About-Stats', link: '/shodyra/admin/stats'},
      {text: 'Edit About-FightStyle', link: '/shodyra/admin/fightstyle'},
      {text: 'Edit About-Session', link: '/shodyra/admin/sessiontype'},
      {text: 'Return to Site', link: '/'},
    ];
    return(
      <div className = {menuClassName}>
        {menuValues.map((value, index)=>(
          <div key={index}>
            <Link
              to={value.link}
              className = 'admin_mobile_menu_panel__link'
              onClick = {this.toggleMenu}
            >
              {value.text}
            </Link>
          </div>
        ))}
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
)(MenuTextOne);
