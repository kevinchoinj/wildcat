import React from 'react';
import { connect } from 'react-redux';
import {pageData} from 'data/pageData';
import {Link} from 'react-router-dom';
import styled, {keyframes, css} from 'styled-components';
import {
  selectTransitionStatus,
  selectLoadedContent,
} from 'reducers';

const overlayOpen = keyframes`
  0% {
    transform: scale(1,1);
  }
  100% {
    transform: scale(0,1);
  }
`;
const overlayClose = keyframes`
  0% {
    transform: scale(0,1);
  }
  100% {
    transform: scale(1,1);
  }
`;
const StyledWrapper = styled.div`
  position: fixed;
  top: 75px;
  right: 9px;
  opacity: 1;
  width: calc(50% - 9px);
  height: calc(50vh - 37.5px);
  z-index: 5;
  transition: .4s ease-out;
  display: flex;
  opacity: ${props => props.transitionInProgress ? 0 : 1}
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
const StyledOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0,0,0,.9);
  top: 0px;
  left: 0px;
`;
const StyledText = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 36px;
  color: var(--gold-color);
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  transition: .3s ease-out;
  pointer-events: none;
`;

const Image = ({className, src, alt}) => (
  <img src={src} alt={alt} className={className}/>
);
const StyledImage = styled(Image)`
  width: calc(100% + 28px);
  height: 100%;
  object-fit: cover;
  transition: .4s ease-out;
  position: absolute;
`;

const StyledColumn = styled.div`
  height: 100%;
  width: 33.333333333333%;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--gold-color);
  a{
    cursor: ${props => props.isActive ? 'default' : 'pointer'};
  }
  &:hover ${StyledImage} {
    transform: translateX(-28px);
  }
  ${StyledImage} {
    transform: ${props => props.isActive ? 'translateX(-28px)' : 'none'};
  }
  &:hover ${StyledText} {
    opacity: 0;
  }
  &:hover ${StyledOverlay} {
    animation: ${overlayOpen} .3s;
    transform: scale(0,1);
    transform-origin: right 0px;
  }
  ${StyledOverlay} {
    animation: ${props => props.isActive ? css`${overlayOpen} .3s` : css`${overlayClose} .3s`};
    transform: ${props => props.isActive ? 'scale(0, 1)' : 'scale(1, 1)'};
    transform-origin: ${props => props.isActive ? 'right 0px' : 'left'};
  }
  ${StyledText} {
    opacity: ${props => props.isActive ? 0 : 1};
  }
`;

const SessionsButtons = ({loadedContent, transitionStatus}) => {
  return(
    <StyledWrapper transitionInProgress={transitionStatus === 'start' || transitionStatus === 'end'}>
      <StyledColumn isActive={loadedContent[pageData.sessionsOneLink]}>
        <Link to="/sessions">
          <StyledImage
            src="/static/images/7.jpg"
            alt="Stats"
          />
          <StyledOverlay/>
          <StyledText>
            Stats
          </StyledText>
        </Link>
      </StyledColumn>
      <StyledColumn isActive={loadedContent[pageData.sessionsTwoLink]}>
        <Link to="/sessions/2">
          <StyledImage
            src="/static/images/2.jpg"
            alt="Style"
          />
          <StyledOverlay/>
          <StyledText>
            Style
          </StyledText>
        </Link>
      </StyledColumn>
      <StyledColumn isActive={loadedContent[pageData.sessionsThreeLink]}>
        <Link to="/sessions/3">
          <StyledImage
            src="/static/images/6.jpg"
            alt="Sessions"
          />
          <StyledOverlay/>
          <StyledText>
            Sessions
          </StyledText>
        </Link>
      </StyledColumn>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    transitionStatus: selectTransitionStatus(state),
    loadedContent: selectLoadedContent(state),
  };
};

export default connect (mapStateToProps, null)(SessionsButtons);