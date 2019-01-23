import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';

import CustomsPreview from 'components/CustomsPreview';
import Background from 'components/Background';

import Menu from 'menu/Menu';

import SessionsOneText from 'pages-sessions/SessionsOneText';
import SessionsTwoText from 'pages-sessions/SessionsTwoText';
import SessionsThreeText from 'pages-sessions/SessionsThreeText';
import HomeOverlay from 'components/HomeOverlay';

import Customs from 'pages/Customs';
import Gallerypage from 'pages/Gallery';
import Contact from 'pages/Contact';
import Links from 'pages/Links';
import Split from 'pages-sessions/Split';
import SessionsButtons from 'components/pages-sessions/SessionsButtons';

import MessageSuccess from 'pages/MessageSuccess';
import MessageFailure from 'pages/MessageFailure';

import SessionsMobileNav from 'pages-sessions/SessionsMobileNav';

import GetFireBase from 'services/GetFireBase';

import LinksSplit from 'components/LinksSplit';
import MobileBackground from 'components/MobileBackground';

import {pageData} from 'data/pageData';

class SiteRoutes extends React.Component {

  componentDidMount(){
    let currentName = this.props.location.pathname;
    this.props.transitionActions.loadContent(currentName, true);
  }

  sleep = (time) => {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
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
      this.startTransition('reset', currentName, nextName);
    }
    else if (nextProps.location !== this.props.location) {
      this.props.transitionActions.startTransition('start');
      let currentName = this.props.location.pathname;
      let nextName = nextProps.location.pathname;

      this.sleep(700).then(() => {
        this.startTransition('end', currentName, nextName);
      }).then(() => {
        this.startTransition('reset', currentName, nextName);
      });
    }

    else if (this.props.location === nextProps.location) {
    }
  }

  render() {

    const {
      loadedContent,
    } =this.props;

    return (
      <div>
        <div className="text_hidden">
          <strong>Ashley Wildcat</strong>
        </div>
        <Background/>

        <Menu/>

        <LinksSplit/>
        <MobileBackground/>

        {loadedContent[pageData.sessionsOneLink] ||
          loadedContent[pageData.sessionsTwoLink] ||
          loadedContent[pageData.sessionsThreeLink] ?
          <SessionsButtons />:null}

        {loadedContent[pageData.kittensLink]?
          <CustomsPreview />:null}
        {loadedContent[pageData.kittensLink]?
          <Customs />:null}
        {loadedContent[pageData.galleryLink]?
          <Gallerypage />:null}
        {loadedContent[pageData.contactLink]?
          <Contact />:null}
        {loadedContent[pageData.linksLink]?
          <Links />:null}
        {loadedContent[pageData.sessionsOneLink]?
          <SessionsOneText />:null}
        {loadedContent[pageData.sessionsTwoLink]?
          <SessionsTwoText/>:null}
        {loadedContent[pageData.sessionsThreeLink]?
          <SessionsThreeText/>:null}
        {loadedContent[pageData.messageSuccess]?
          <MessageSuccess/>:null}
        {loadedContent[pageData.messageFailure]?
          <MessageFailure/>:null}
        <SessionsMobileNav/>
        <HomeOverlay/>
        <GetFireBase/>
      </div>
    );
  }
}
export default connect(
  (state, ownProps) => ({
    loadedContent: state.transition.loadedContent,
  }),
  dispatch => ({
    transitionActions: bindActionCreators(transitionActions, dispatch),
  }),
)(SiteRoutes);
