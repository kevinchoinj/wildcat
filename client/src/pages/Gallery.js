import React, {Suspense} from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
const GalleryWrapper = React.lazy(() => import('../gallery/GalleryWrapper'));

class Gallery extends React.Component {
  render(){
    const {
      transitionStatus
    } = this.props;

    const wrapperName = classNames({
      'gallery_wrapper': true,
      'gallery_wrapper--transition': transitionStatus === 'start' || transitionStatus === 'end',
    });
    return(
      <div className={wrapperName}>
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryWrapper/>
        </Suspense>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
  }),
  (dispatch) => ({
  }),
)(Gallery);
