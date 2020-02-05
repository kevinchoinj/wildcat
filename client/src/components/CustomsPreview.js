import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectTransitionInProgress,
  selectImagesCurrentlyHovered,
} from 'reducers';

const StyledWrapper = styled.div`
  height: calc(100% - 75px);
  width: 33.33333333333vw;
  position: fixed;
  top: 75px;
  left: 0px;
  transition: .3s ease-out;
  opacity: ${props => props.transitionInProgress ? 0 : 1};
  @media screen and (max-width: 992px) {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    transition: .3s ease-out;
    object-fit: cover;
  }
`;

const CustomsPreview = ({transitionInProgress, currentlyHovered}) => {
  return(
    <StyledWrapper transitionInProgress={transitionInProgress}>
      {currentlyHovered ?
        <img src={currentlyHovered} alt="currently hovered customs visitor" className="kittens_preview"/>
        :
        <div/>
      }
    </StyledWrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    transitionInProgress: selectTransitionInProgress(state),
    currentlyHovered: selectImagesCurrentlyHovered(state),
  };
};

export default connect (mapStateToProps, null)(CustomsPreview);
