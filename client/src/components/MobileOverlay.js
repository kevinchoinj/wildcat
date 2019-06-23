import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectLoadedContentHome,
} from 'reducers';

const StyledOverlay = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: var(--black-color);
  opacity: ${props => props.displayed ? 1 : 0};
  transition: .3s ease-out;
  @media screen and (max-width: 992px) {
    display: block;
  }
`;
const MobileOverlay = ({loadedContentHome}) => {
  return (
    <StyledOverlay displayed={!loadedContentHome}/>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedContentHome: selectLoadedContentHome(state),
  };
};

export default connect (mapStateToProps, null)(MobileOverlay);
