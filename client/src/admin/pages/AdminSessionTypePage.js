import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminBasicTextForm from 'admin/forms/AdminBasicTextForm';
import * as adminActions from 'actions/admin';
import AdminSessions from 'admin/components/AdminSessions';

class AdminSessionTypePage extends React.Component {
  addStats = values => {
    this.props.adminActions.postSessionsText(values);
  }
  render(){
    return (
      <div>
        <div className="admin_container">
          <div className="admin_title">
            Add Text to Session Type
          </div>
          <div className="admin_container__body">
            <AdminBasicTextForm onSubmit={this.addStats}/>
          </div>
        </div>
        <div className="admin_container">
          <div className="admin_title">
            Reorder/Delete Text Lines
          </div>
          <div className="admin_container__body">
            <AdminSessions/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    adminActions: bindActionCreators(adminActions, dispatch),
  }),
)(AdminSessionTypePage);
