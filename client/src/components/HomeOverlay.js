import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectLoadedContentHome,
} from 'reducers';

const StyledWrapper = styled.div`
  width: 35vw;
  height: calc(100% - 75px);
  position: fixed;
  right: -35vw;
  top: 75px;
  padding: 0px 24px;
  transition: .3s ease-out;
  display: table;
  background-color: rgba(0,0,0,.95);
  transform: ${props => props.displayed ? 'translateX(-35vw)' : 'none'};
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledBody = styled.div`
  font-family: 'Lato', Helvetica, sans-serif;
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: var(--gold-color);
  line-height: 24px;
  width: calc(100% - 48px);
  position: absolute;
  bottom: 24px;
`;

const HomeOverlay = ({loadedContentHome}) => {
  return (
    <StyledWrapper displayed={loadedContentHome}>
      <StyledBody>
        <strong>This is more than just work for me.</strong>
        <br/><br/>
        This is an addiction of mine.
        With that being said.. If you are creepy or even ask for anything sexual/sensual
        I will not even respond. I have a $100 minimum for anything (like Skype, phone, email, pics)
        My rate is $400 hour then $300 for any additional hour (unless you are an original client before
        I raised my rates-then you are locked in) I give a $50 discount if you allow me to film our
        match and sell it on my video sites. My PayPal email is ashleywildcat@outlook.com It’s always
        good to get my attention by sending money since I have very expensive taste <span role="img" aria-label="crying laughing emoji">😂</span>
        <br/><br/>
        Let’s have some fun and hope to see you on the mats
      </StyledBody>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedContentHome: selectLoadedContentHome(state),
  };
};

export default connect (mapStateToProps, null)(HomeOverlay);
