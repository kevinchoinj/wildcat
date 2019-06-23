import React from 'react';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import styled from 'styled-components';
import {
  selectPagesMenuDisplayed,
} from 'reducers';

const StyledContainer = styled.div`
  width: 32px;
  position: relative;
`;
const StyledLine = styled.span`
  height: 3px;
  width: 32px;
  position: absolute;
  background-color: var(--black-color);
  left: 0;
  z-index: 11;
  transition:.3s ease-out;
  transform: none;
`;
const StyledWrapper = styled.div`
  position: fixed;
  z-index:  100;
  top: 0px;
  left: 0px;
  width: ${props => props.displayed ? '16.66666666666666%' : '8.333333333333333%'};
  height: 75px;
  cursor: pointer;
  background-color:  var(--gold-color);
  transition: .3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    width: ${props => props.displayed ? '260px' : '100px'};
  }
  ${StyledLine}:nth-child(1) {
    top: -9px;
    transform: ${props => props.displayed && 'translateY(4px) rotate(45deg)'};
  }
  ${StyledLine}:nth-child(2) {
    transform: ${props => props.displayed && 'translateY(-5px) rotate(-45deg)'};
  }
  ${StyledLine}:nth-child(3) {
    top: 9px;
    width: ${props => props.displayed && '0px'};
  }
`;
const MenuButton = ({menuDisplay, toggleMenu}) => {
  return(
    <StyledWrapper
      displayed={menuDisplay}
      onClick={() => toggleMenu(menuDisplay)}
    >
      <StyledContainer>
        <StyledLine/>
        <StyledLine/>
        <StyledLine/>
      </StyledContainer>
    </StyledWrapper>
  );
};


const mapStateToProps = (state) => {
  return {
    menuDisplay: selectPagesMenuDisplayed(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (menuDisplay) => {
      dispatch(pagesActions.toggleMenu(!menuDisplay));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(MenuButton);