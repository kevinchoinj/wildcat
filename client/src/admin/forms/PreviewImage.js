import React from 'react';
import { connect } from 'react-redux';
import {formValueSelector  } from 'redux-form';
import CustomNoWrap from 'admin/components/CustomNoWrap';

class PreviewImage extends React.Component {
  render() {
    const {
      nameValue,
      subtitleValue,
      image,
    } = this.props;


    return (
      <CustomNoWrap
        image={image}
        title={nameValue}
        subtitle={subtitleValue}
        position="center top"
      />
    );
  }
}
const selector = formValueSelector('postImage');// <-- same as form name
export default connect(
  (state, ownProps) => ({
    nameValue: selector(state, 'name'),
    subtitleValue: selector(state, 'subtitle'),
  }),
  dispatch => ({
  }),
)(PreviewImage);