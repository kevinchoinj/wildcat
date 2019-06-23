import React from 'react';
import {Link} from 'react-router-dom';
import {pageData} from 'data/pageData';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 75px;
  background-color: #000;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.5rem;
  z-index: 10;
  position: fixed;
  top: 0px;
  cursor: default;
  box-shadow:  0px 10px 50px 10px rgba(0,0,0,0.5);
  a {
    line-height: 75px;
    color: var(--gold-color);
    text-decoration: none;
    transition:.2s ease-out;
    &:hover {
      color: #574b2c;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 992px) {
    width: 100vw;
    height: 75px;
    background-color: #000;
    text-align: center;
    font-family: 'Lato', Helvetica;
    font-size: 14px;
    letter-spacing: 1vw;
    z-index: 10;
    position: fixed;
    left: 50px;
    top: 0px;
    cursor: default;
    box-shadow:  none;
  }
`;
const MenuBar = () => {
  return(
    <StyledWrapper>
      <Link to={pageData.homeLink}>
        ASHLEY WILDCAT
      </Link>
    </StyledWrapper>
  );
};

export default MenuBar;