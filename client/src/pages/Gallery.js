import React from 'react';
import Gallerycomp from 'gallery/Gallery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import * as scrollActions from 'actions/scroll';
import classNames from 'classnames';
import Scrollbar from 'smooth-scrollbar';

class Gallery extends React.Component {
  componentDidMount() {

    Scrollbar.init(document.querySelector('#scroll_gallery'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
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
        <div id="scroll_gallery" className="gallery_container">
          <Gallerycomp/>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
  }),
  (dispatch) => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Gallery);
