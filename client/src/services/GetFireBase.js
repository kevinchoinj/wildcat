import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from 'actions/admin';

class GetAboutText extends React.Component {
  componentDidMount() {
    this.props.adminActions.getFireBaseStorage();
  }
  render() {
    return null;
  }
}

export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    adminActions: bindActionCreators(adminActions, dispatch),
  }),
)(GetAboutText);