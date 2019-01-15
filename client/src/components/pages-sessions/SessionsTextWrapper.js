import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Scrollbar from 'smooth-scrollbar';

class Column extends React.Component{

  componentDidMount() {
    Scrollbar.init(document.querySelector('#scroll_sessions'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }

  render(){
    const {
      transitionStatus,
    } = this.props;
    const titleName = classNames({
      'about_title': true,
      'about_title--transition': transitionStatus === 'start' || transitionStatus === 'end',
    });
    const innerName = classNames({
      'sessions_text_inner': true,
      'sessions_text_inner--transition': transitionStatus === 'start' || transitionStatus === 'end',
    });

    return(
      <div className="sessions_text" id="scroll_sessions">
        <div className="about_title__container">
          <div className={titleName}>
            {this.props.title}
          </div>
        </div>
        <div className={innerName}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
  }),
  dispatch => ({
  }),
)(Column);