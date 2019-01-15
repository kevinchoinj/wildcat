import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminBasicTextForm from 'admin/forms/AdminBasicTextForm';
import * as adminActions from 'actions/admin';
import AdminStats from 'admin/components/AdminStats';

class Admin extends React.Component {
  addStats = values => {
    this.props.adminActions.postStatsText(values);
  }
  render(){
    return (
      <div>
        <div className="admin_container">
          <div className="admin_title">
            Add Text to About
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
            <AdminStats/>
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
)(Admin);
