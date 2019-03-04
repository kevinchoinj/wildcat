import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as authActions from 'actions/authentication';
import Scrollbar from 'smooth-scrollbar';

class Admin extends React.Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('#admin_menu'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
  signOut = () => {
    this.props.authActions.signOutUser();
  }
  render(){
    const menuValues = [
      {text: 'Admin Home', link: '/shodyra/admin'},
      {text: 'Edit Gallery', link: '/shodyra/admin/gallery'},
      {text: 'Edit About-Stats', link: '/shodyra/admin/stats'},
      {text: 'Edit About-FightStyle', link: '/shodyra/admin/fightstyle'},
      {text: 'Edit About-Session', link: '/shodyra/admin/sessiontype'},
    ];

    return (
      <div className="admin_menu_wrapper">
        <img src='/static/images/logo.png' alt="logo" className="admin_logo"/>
        <div className="admin_menu_container" id="admin_menu">
          {menuValues.map((value, index)=>(
            <div key={index}>
              <Link
                to={value.link}
                className = 'admin_menu_link'
              >
                {value.text}
              </Link>
            </div>
          ))}
          <div className="admin_menu_link" onClick={this.signOut}>
            Sign Out
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    loggedIn: state.authentication.loggedIn,
    email: state.authentication.email,
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
  }),
)(Admin);
