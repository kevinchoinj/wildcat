import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';
import SiteRoutes from 'pages/SiteRoutes';

class SiteRoutesWrapper extends React.Component {

  componentDidMount(){
    let currentName = this.props.location.pathname;
    this.props.transitionActions.loadContent(currentName, true);
  }

  startTransition = (status, currentName, nextName) => {
    this.props.transitionActions.startTransition(status);
    this.props.transitionActions.loadContent(currentName, false);
    this.props.transitionActions.loadContent(nextName, true);
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.location !== this.props.location) && (this.props.location.pathname==='/')) {
      let currentName = this.props.location.pathname;
      let nextName = nextProps.location.pathname;
      this.startTransition('end', currentName, nextName);
      setTimeout(function(){
        this.props.transitionActions.startTransition('reset');
      }.bind(this), 400);
    }
    else if (nextProps.location !== this.props.location) {
      this.props.transitionActions.startTransition('start');
      let currentName = this.props.location.pathname;
      let nextName = nextProps.location.pathname;
      this.props.transitionActions.previousPageName(currentName);

      setTimeout(function(){
        this.startTransition('end', currentName, nextName);
      }.bind(this), 700);
      setTimeout(function(){
        this.props.transitionActions.startTransition('reset');
      }.bind(this), 800);
    }
  }

  render() {
    return (
      <div>
        <div className="text_hidden">
          <strong>Ashley Wildcat</strong>
        </div>
        <SiteRoutes/>
      </div>
    );
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    transitionActions: bindActionCreators(transitionActions, dispatch),
  }),
)(SiteRoutesWrapper);
