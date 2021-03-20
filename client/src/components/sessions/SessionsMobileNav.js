import React from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
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
  height: 37.5px;
  transition: .3s ease-out;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: ${props => props.displayed ? 1: 0}
  pointer-events: ${props => props.displayed ? 'auto' : 'none'};
  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

const LinkObject = ({children, to, className}) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

const StyledLink = styled(LinkObject)`
  background-color: ${props => props.active && 'var(--gold-color)'};
  color: ${props => props.active ? '#000' : 'var(--gold-color)'};
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
  &:hover {
    background-color: var(--gold-color);
    color: #000;
  }
`;

const SessionsMobileNav = ({location, loadedContentSessions}) => {
  console.log(location);
  return(
    <StyledWrapper displayed={loadedContentSessions}>
      <StyledLink to="/sessions" active={location.pathname==='/sessions'}>
        Stats
      </StyledLink>
      <StyledLink to="/sessions/2" active={location.pathname==='/sessions/2'}>
        Style
      </StyledLink>
      <StyledLink to="/sessions/3" active={location.pathname==='/sessions/3'}>
        Sessions
      </StyledLink>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedContentSessions: selectLoadedContentSessions(state),
  };
};

export default withRouter(connect(mapStateToProps, null)(SessionsMobileNav));
