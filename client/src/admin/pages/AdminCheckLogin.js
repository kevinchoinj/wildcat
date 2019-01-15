import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SetUser from 'admin/services/SetUser';
import LoginForm from 'admin/forms/LoginForm';
import * as pagesActions from 'actions/pages';
import * as authActions from 'actions/authentication';
import * as imagesActions from 'actions/images';
import AdminRoutes from 'admin/pages/AdminRoutes';
import {Link} from 'react-router-dom';

import {Route} from 'react-router-dom';

let json = require('config.json');
let emailAddress= json.emailAddress;

const LoginDisplay = ({loggedIn, login, email,}) => {
  if (loggedIn && email === emailAddress){
    return (
      <Route path="/shodyra/admin" render={(props) => <AdminRoutes/>} />
    );
  }
  else {
    return (
      <div className="admin_login_wrapper">
        <div className="admin_login_container">
          <div className="admin_login_content">
            <div className="admin_container">
              <div className="admin_title">
                Log In
              </div>
              <div className="admin_container__body">
                <LoginForm onSubmit={login}/>
              </div>
            </div>
            <Link to="/">Return to Site</Link>
          </div>
        </div>
      </div>
    );
  }
};

class CheckLogin extends Component {
  login = values => {
    this.props.authActions.signInUser(values, '/');
  };

  render() {
    const {
      loggedIn,
      email,
    }=this.props;
    return (
      <div>
        <SetUser/>
        <LoginDisplay
          loggedIn = {loggedIn}
          signOut={this.signOut}
          login={this.login}
          email={email}
        />
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
    pagesActions: bindActionCreators(pagesActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(CheckLogin);
