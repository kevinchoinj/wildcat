import React from 'react';
import {connect} from 'react-redux';

import CustomsPreview from 'components/CustomsPreview';
import Background from 'components/Background';

import Menu from 'menu/Menu';

import SessionsOneText from 'components/pages-sessions/SessionsOneText';
import SessionsTwoText from 'components/pages-sessions/SessionsTwoText';
import SessionsThreeText from 'components/pages-sessions/SessionsThreeText';
import HomeOverlay from 'components/HomeOverlay';

import Customs from 'pages/Customs';
import Gallerypage from 'pages/Gallery';
import Contact from 'pages/Contact';
import Links from 'pages/Links';
import SessionsButtons from 'components/pages-sessions/SessionsButtons';

import MessageSuccess from 'pages/MessageSuccess';
import MessageFailure from 'pages/MessageFailure';

import SessionsMobileNav from 'components/pages-sessions/SessionsMobileNav';

import GetFireBase from 'services/GetFireBase';

import LinksSplit from 'components/LinksSplit';
import MobileBackground from 'components/MobileBackground';

import {pageData} from 'data/pageData';

class SiteRoutes extends React.Component {

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
  }),
)(SiteRoutes);
