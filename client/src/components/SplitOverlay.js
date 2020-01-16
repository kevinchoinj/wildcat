import React from 'react';
import { connect } from 'react-redux';
import {pageData} from 'data/pageData';
import styled, {keyframes} from 'styled-components';
import {
  selectLoadedContent,
  selectTransitionStatus,
} from 'reducers';

const verticalShow = keyframes`
  0% {
    transform: translateY(0vh);
  }
  100% {
    transform: translateY(100vh);
  }
`;
const verticalHide = keyframes`
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(200vh);
  }
`;
const StyledWrapper = styled.div`
  margin-top: 75px;
  height: calc(100vh - 75px);
  width: 100vw;
  pointer-events: none;
  display: flex;
  position:fixed;
  top: 0px;
  left: 0px;
`;
const StyledColumn = styled.div`
  width: 33.33333333333%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(0,0,0,.95);
  transition-duration: .4s;
  transition-timing-function: ease-out;
  top: -100vh;
  transform: translateY(0px);
  animation-fill-mode: both;
  animation-duration: .4s;
  animation-name: ${props => props.displayed && verticalShow};
  animation-name: ${props => props.hidden && verticalHide};
  animation-delay: ${props => props.delay};
  transition-delay: ${props => props.delay};
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledColumnBorder = styled(StyledColumn)`
  border-left: 1px solid rgba(175,151,89,.16);
`;
const StyledSplit = styled.div`
  width: 50%;
  border-right: 1px solid rgba(175,151,89,.16);
  @media screen and (max-width: 992px) {
    border: none;
  }
`;
const SplitOverlay = ({loadedContent, transitionStatus}) => {
  return(
    <StyledWrapper>
      <StyledColumn
        displayed={!loadedContent[pageData.homeLink] && transitionStatus === 'reset'}
        hidden={!loadedContent[pageData.homeLink] && transitionStatus === 'start'}
        delay="0s"
      >
        <StyledSplit/>
      </StyledColumn>
      <StyledColumnBorder
        displayed={!loadedContent[pageData.homeLink] && transitionStatus === 'reset'}
        hidden={!loadedContent[pageData.homeLink] && transitionStatus === 'start'}
        delay=".15s"
      >
        <StyledSplit/>
      </StyledColumnBorder>
      <StyledColumnBorder
        displayed={!loadedContent[pageData.homeLink] && transitionStatus === 'reset'}
        hidden={!loadedContent[pageData.homeLink] && transitionStatus === 'start'}
        delay=".3s"
      >
        <StyledSplit/>
      </StyledColumnBorder>

    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedContent: selectLoadedContent(state),
    transitionStatus: selectTransitionStatus(state),
  };
};

export default connect (mapStateToProps, null)(SplitOverlay);
