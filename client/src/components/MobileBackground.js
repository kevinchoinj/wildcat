import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scrollActions from '../actions/scroll';
import classNames from 'classnames';
import {pageData} from 'data/pageData';

class MobileBackground extends React.Component{
  render(){
    const {
      loadedContent,
    } = this.props;

    const backgroundName = classNames({
      'mobile_background': true,
      'mobile_background--display':
      (
        !loadedContent[pageData.homeLink]
      )
    });

    return(
      <div className={backgroundName}>

      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    loadedContent: state.transition.loadedContent,
    transitionStatus: state.transition.transitionStatus,
  }),
  dispatch => ({
    scrollActions: bindActionCreators(scrollActions, dispatch),
  }),
)(MobileBackground);