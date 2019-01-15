import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import * as authActions from 'actions/authentication';

class AdminNavbar extends React.Component{
  signOut = () => {
    this.props.authActions.signOutUser();
  }
  render(){
    return (
      <div className="admin_navbar">
        <div>
          <Link to="/" className="admin_navbar__link">
            Return to Site
          </Link>
        </div>
        <div className="admin_signout_button__container">
          <button onClick={this.signOut} className="admin_signout_button">
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}
export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
  }),
)(AdminNavbar);