import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectTransitionInProgress,
} from 'reducers';

const StyledWrapper = styled.div`
  margin-top: 75px;
  width: 100vw;
  height: calc(100% - 75px);
  transition: .4s ease;
  color: #fff;
  position: fixed !important;
  top: 0px;
  opacity: ${props => props.transitionInProgress ? 0 : 1};
  overflow-y: auto;
  @media screen and (max-width: 992px) {
    transition: .2s ease;
    margin-top: 112.5px;
    height: calc(100% - 112.5px);
  }
`;
const StyledTitleWrapper = styled.div`
  width: 50%;
  margin-top: 24px;
  opacity: 1;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
const StyledTitle = styled.div`
  display: flex;
  font-size: 36px;
  color: var(--gold-color);
  font-weight: 600;
  align-items: center;
  transition: .3s ease-out;
  &:after,
  &:before {
    content: '';
    background: var(--gold-color);
    height: 1px;
    margin: 6px;
  }
  &:after {
    flex: 1;
  }
  &:before {
    flex-basis: 33.33333333333%;
    @media screen and (max-width: 992px) {
      flex-basis: auto;
      flex: 1;
    }
  }
`;
const StyledBody = styled.div`
  width: 100%;
  pointer-events: auto;
  padding: 24px 50% 24px 16.6666666666666%;
  transition: .4s ease-out;
  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 24px 24px 100px 24px;
    margin-left: 0px;
  }
`;
const SessionsTextWrapper = ({transitionInProgress, title, children}) => {
  return (
    <StyledWrapper
      transitionInProgress={transitionInProgress}
    >
      <StyledTitleWrapper>
        <StyledTitle>
          {title}
        </StyledTitle>
      </StyledTitleWrapper>
      <StyledBody>
        {children}
      </StyledBody>
    </StyledWrapper>
  );

};

const mapStateToProps = (state) => {
  return {
    transitionInProgress: selectTransitionInProgress(state),
  };
};

export default connect (mapStateToProps, null)(SessionsTextWrapper);
