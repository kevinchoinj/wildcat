import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {
  selectLoadedContentSessions,
} from 'reducers';

const StyledWrapper = styled.div`
  display: none;
  position: fixed;
  top: 75px;
  justify-content: space-between;
  width: 100vw;
  height: 75px;
  transition: .3s ease-out;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: ${props => props.displayed ? 1: 0}
  pointer-events: ${props => props.displayed ? 'auto' : 'none'}
  @media screen and (max-width: 992px) {
    display: flex;
  }
  a {
    color: var(--gold-color);
    text-decoration: none;
    font-size: 14px;
    width: 33.333333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--gold-color);
    border-top: 1px solid var(--gold-color);
    &:nth-child(1),
    &:nth-child(2) {
      border-right: 1px solid var(--gold-color);
    }
  }
`;

const SessionsMobileNav = ({loadedContentSessions}) => {
  return(
    <StyledWrapper displayed={loadedContentSessions}>
      <Link to="/sessions">
        Stats
      </Link>
      <Link to="/sessions/2">
        Style
      </Link>
      <Link to="/sessions/3">
        Sessions
      </Link>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedContentSessions: selectLoadedContentSessions(state),
  };
};

export default connect (mapStateToProps, null)(SessionsMobileNav);
