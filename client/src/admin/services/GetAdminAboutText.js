import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from 'actions/admin';

class GetAdminAboutText extends React.Component {
  componentDidMount() {
    this.props.adminActions.getStatsText();
    this.props.adminActions.getStyleText();
    this.props.adminActions.getSessionsText();
  }
  render() {
    return null;
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    adminActions: bindActionCreators(adminActions, dispatch),
  }),
)(GetAdminAboutText);