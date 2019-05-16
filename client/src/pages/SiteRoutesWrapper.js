import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';
import SiteRoutes from 'pages/SiteRoutes';

class SiteRouteswrapper extends React.Component {

  componentDidMount(){
    let currentName = this.props.location.pathname;
    this.props.transitionActions.loadContent(currentName, true);
  }
  startTransition = (status, currentName, nextName) => {
    this.props.transitionActions.startTransition(status);
    this.props.transitionActions.loadContent(currentName, false);
    this.props.transitionActions.loadContent(nextName, true);
  }
  componentDidUpdate(prevProps) {
    const current = this.props.location;
    const previous = prevProps.location;
    if (previous.pathname==='/') {
      this.startTransition('end', previous.pathname, current.pathname);
      setTimeout(() =>{
        this.props.transitionActions.startTransition('reset');
      }, 400);
    }
    else if (current !== previous) {
      this.props.transitionActions.startTransition('start');
      setTimeout(() => {
        this.startTransition('end', previous.pathname, current.pathname);
      }, 700);
      setTimeout(() => {
        this.props.transitionActions.startTransition('reset');
      }, 800);
    }
  }
  render() {

    return (
      <SiteRoutes/>
    );
  }
}
export default connect(
  () => ({
  }),
  dispatch => ({
    transitionActions: bindActionCreators(transitionActions, dispatch),
  }),
)(SiteRouteswrapper);
