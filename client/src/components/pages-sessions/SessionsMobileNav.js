import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as scrollActions from 'actions/scroll';
import classNames from 'classnames';
import {pageData} from 'data/pageData';

class Split extends React.Component{

  render(){

    const {
      loadedContent,
    } = this.props;

    const navName = classNames({
      'sessions_mobile_nav': true,
      'sessions_mobile_nav--displayed':
           (loadedContent[pageData.sessionsOneLink])
        || (loadedContent[pageData.sessionsTwoLink])
        || (loadedContent[pageData.sessionsThreeLink]),
    });

    return(
      <div className={navName}>
        <Link to="/sessions">
          Stats
        </Link>
        <Link to="/sessions/2">
          Style
        </Link>
        <Link to="/sessions/3">
          Sessions
        </Link>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loadedContent: state.transition.loadedContent,
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(Split);