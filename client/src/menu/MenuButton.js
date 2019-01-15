import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import classNames from 'classnames';

class MenuButton extends React.Component{
  toggleMenu(){
    this.props.pagesActions.toggleMenu(!this.props.menuDisplayed);
  }
  render(){
    const {
      menuDisplayed,
    } = this.props;
    const buttonName = classNames({
      'menu_button': true,
      'menu_button--displayed': menuDisplayed,
    });

    return(
      <div
        className={buttonName}
        onClick={()=>this.toggleMenu(menuDisplayed)}
      >
        <span className="menu_button__line"></span>
        <span className="menu_button__line"></span>
        <span className="menu_button__line"></span>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplayed:state.pages.menuDisplayed,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(MenuButton);
