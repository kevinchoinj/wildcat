import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scrollActions from 'actions/scroll';
import classNames from 'classnames';
import {pageData} from 'data/pageData';
import {Link} from 'react-router-dom';
import image1 from 'images/7.jpg';
import image2 from 'images/2.jpg';
import image3 from 'images/6.jpg';


class Split extends React.Component{
  render(){

    const {
      loadedContent,
      transitionStatus,
    } = this.props;

    const activeOneName = classNames({
      'sessions_column_quadrant': true,
      'sessions_column_quadrant--active':loadedContent[pageData.sessionsOneLink]
    });
    const activeTwoName = classNames({
      'sessions_column_quadrant': true,
      'sessions_column_quadrant--active':loadedContent[pageData.sessionsTwoLink]
    });
    const activeThreeName = classNames({
      'sessions_column_quadrant': true,
      'sessions_column_quadrant--active':loadedContent[pageData.sessionsThreeLink]
    });

    const wrapperName = classNames({
      'sessions_buttons__wrapper': true,
      'sessions_buttons__wrapper--transition': transitionStatus === 'start' || transitionStatus === 'end',
    });

    return(
      <div className={wrapperName}>
        <div className={activeOneName}>
          <Link to="/sessions">
            <img src={image1} alt="ashley wildcat" className="sessions_column_image"/>
            <div className="sessions_column_overlay"/>
            <div className="sessions_column_overlay__text">
              Stats
            </div>
          </Link>
        </div>
        <div className={activeTwoName}>
          <Link to="/sessions/2">
            <img src={image2} alt="ashley wildcat" className="sessions_column_image"/>
            <div className="sessions_column_overlay"/>
            <div className="sessions_column_overlay__text">
              Style
            </div>
          </Link>
        </div>
        <div className={activeThreeName}>
          <Link to="/sessions/3">
            <img src={image3} alt="ashley wildcat" className="sessions_column_image"/>
            <div className="sessions_column_overlay"/>
            <div className="sessions_column_overlay__text">
              Sessions
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
    loadedContent: state.transition.loadedContent,
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Split);