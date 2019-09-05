import React from 'react';
import {connect} from 'react-redux';

import CustomsPreview from 'components/CustomsPreview';
import Background from 'components/Background';

import Menu from 'menu/Menu';

import SessionsText from 'components/sessions/SessionsText';
import HomeOverlay from 'components/HomeOverlay';

import Gallerypage from 'pages/Gallery';
import Contact from 'pages/Contact';
import Links from 'pages/Links';
import SessionsButtons from 'components/sessions/SessionsButtons';

import MessageSuccess from 'pages/MessageSuccess';
import MessageFailure from 'pages/MessageFailure';

import SessionsMobileNav from 'components/sessions/SessionsMobileNav';

import SplitOverlay from 'components/SplitOverlay';
import MobileOverlay from 'components/MobileOverlay';

import {pageData} from 'data/pageData';
import {
  selectLoadedContent,
} from 'reducers';

const SiteRoutes = ({loadedContent}) => {
  return (
    <div>
      <Background/>

      <Menu/>

      <SplitOverlay/>
      <MobileOverlay/>

      {loadedContent[pageData.sessionsOneLink] ||
        loadedContent[pageData.sessionsTwoLink] ||
        loadedContent[pageData.sessionsThreeLink] ?
        <SessionsButtons />:null}

      {loadedContent[pageData.kittensLink]?
        <CustomsPreview />:null}
      {loadedContent[pageData.galleryLink]?
        <Gallerypage />:null}
      {loadedContent[pageData.contactLink]?
        <Contact />:null}
      {loadedContent[pageData.linksLink]?
        <Links />:null}
      {loadedContent[pageData.sessionsOneLink] &&
        <SessionsText
          key="sessionsOne"
          keyValue="sessionsOne"
          title="Stats"
        />}
      {loadedContent[pageData.sessionsTwoLink] &&
        <SessionsText
          key="sessionsTwo"
          keyValue="sessionsTwo"
          title="Style"
        />}
      {loadedContent[pageData.sessionsThreeLink] &&
        <SessionsText
          key="sessionsThree"
          keyValue="sessionsThree"
          title="Sessions"
        />}
      {loadedContent[pageData.messageSuccess]?
        <MessageSuccess/>:null}
      {loadedContent[pageData.messageFailure]?
        <MessageFailure/>:null}
      <SessionsMobileNav/>
      <HomeOverlay/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedContent: selectLoadedContent(state),
  };
};

export default connect (mapStateToProps, null)(SiteRoutes);