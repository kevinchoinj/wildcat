import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import * as authActions from 'actions/authentication';
import * as imagesActions from 'actions/images';
import ImagePostForm from 'admin/forms/ImagePostForm';
import AdminGallery from 'admin/components/AdminGallery';

class Admin extends React.Component {
  addImage = values => {
    this.props.imagesActions.postImageUrl(values);
  }
  render(){
    return (
      <div>
        <div className="admin_container">
          <div className="admin_title">
            Edit Gallery
          </div>
          <div className="admin_container__body">
            <ImagePostForm onSubmit={this.addImage}/>
          </div>
        </div>

        <div className="admin_container">

          <div className="admin_title">
            Customs Page
          </div>
          <div className="admin_container__body">
            <AdminGallery />
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
    pagesActions: bindActionCreators(pagesActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(Admin);
