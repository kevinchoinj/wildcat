import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';
import {
  selectTransitionInProgress,
} from 'reducers';

const StyledWrapper = styled.div`
  opacity: ${props => props.transitionInProgress ? 0 : 1};
  transition: .4s ease-out;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 75px);
  position: fixed;
  margin-top: 75px;
  color: var(--gold-color);
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 600;
  overflow-wrap: break-word;
`;
const StyledContainer = styled.div`
  padding: 24px 0px;
`;
const StyledTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 700;
  color: var(--gold-color);
  font-size: 36px;
  margin-bottom: 24px;
  &:after,
  &:before {
    content: '';
    background: var(--gold-color);
    height: 1px;
    margin: 6px;
  }
  &:before {
    flex-basis: 16.666666666666%;
  }
  &:after {
    flex: 1;
  }
`;
const StyledMessage = styled.div`
  width: 83.3333333333%;
  margin-left: 16.6666666666%;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    padding: 0 1rem;
  }
`;

const MessageFailure = ({transitionInProgress}) => {
  useEffect(() => {
    Scrollbar.init(document.querySelector('#scroll_success'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  });
  return(
    <StyledWrapper
      id="scroll_success"
      transitionInProgress={transitionInProgress}
    >
      <StyledContainer>
        <StyledTitle>
          Message Successfully Sent
        </StyledTitle>
        <StyledMessage>
          I will contact you back as soon as possible!
        </StyledMessage>
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    transitionInProgress: selectTransitionInProgress(state),
  };
};

export default connect (mapStateToProps, null)(MessageFailure);