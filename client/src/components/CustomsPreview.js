import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as pagesActions from 'actions/pages';
import * as imagesActions from 'actions/images';

class CustomsPreview extends React.Component {
  render(){

    const {
      transitionStatus,
      currentlyHovered,
    } = this.props;

    const wrapperName = classNames({
      'kittens_left': true,
      'kittens_left--transition':
        transitionStatus === 'start' ||
        transitionStatus === 'end',
    });

    return(
      <div className={wrapperName}>
        {currentlyHovered?
          <img src={currentlyHovered} alt="currently hovered customs visitor" className="kittens_preview"/>
          :
          <div/>
        }
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    currentlyHovered: state.images.currentlyHovered,
    transitionStatus: state.transition.transitionStatus,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(CustomsPreview);
