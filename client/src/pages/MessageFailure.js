import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import classNames from 'classnames';
import Scrollbar from 'smooth-scrollbar';

class MessageSuccess extends React.Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('#scroll_links'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
  render(){
    const {
      transitionStatus,
    } = this.props;

    const wrapperName = classNames({
      'links_wrapper': true,
      'links_wrapper--transition': transitionStatus === 'start' || transitionStatus === 'end',
    });

    return(
      <div className={wrapperName} id="scroll_links">
        <div className="links_container">
          <div className="links_title__wrapper">
            <div className="links_title">
              Message Delivery Failed
            </div>
          </div>
          <div className="links_link__container">
            <div className="left_offset">
              Please try again at another time or contacting me via other means.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
  }),
  (dispatch) => ({pagesActions: bindActionCreators(pagesActions, dispatch)}),
)(MessageSuccess);
