import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scrollActions from '../actions/scroll';
import classNames from 'classnames';
import {pageData} from 'data/pageData';

class LinksSplit extends React.Component{
  render(){
    const {
      loadedContent,
      transitionStatus,
    } = this.props;

    const columnName = classNames({
      'columnbg_column': true,
      'columnbg_column--display':
      (
        loadedContent[pageData.linksLink] ||
        loadedContent[pageData.contactLink] ||
        loadedContent[pageData.kittensLink] ||
        loadedContent[pageData.galleryLink] ||
        loadedContent[pageData.messageSuccess] ||
        loadedContent[pageData.messageFailure]
      )
      &&
      (transitionStatus === 'reset'),
      'columnbg_column--hide':
      (
        (
          loadedContent[pageData.linksLink] ||
          loadedContent[pageData.contactLink] ||
          loadedContent[pageData.kittensLink] ||
          loadedContent[pageData.galleryLink] ||
          loadedContent[pageData.messageSuccess] ||
          loadedContent[pageData.messageFailure]
        )
        &&
        transitionStatus === 'start'
      )
    });

    return(
      <div className="columnbg_wrapper">
        <div className={columnName}>
          <div className="columnbg_column__half">
          </div>
        </div>
        <div className={columnName}>
          <div className="columnbg_column__half">
          </div>
        </div>
        <div className={columnName}>
          <div className="columnbg_column__half">
          </div>
        </div>

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
)(LinksSplit);