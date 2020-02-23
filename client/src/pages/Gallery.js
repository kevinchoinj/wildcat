import React, {Suspense} from 'react';
import { connect } from 'react-redux';
import styled, {css, keyframes} from 'styled-components';
import {
  selectTransitionInProgress,
  selectLoadedContent,
} from 'reducers';
import { pageData } from 'data/pageData';

const GalleryWrapper = React.lazy(() => import('../gallery/GalleryWrapper'));

const loadGallery = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const hideGallery = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledWrapper = styled.div`
  animation: ${loadGallery} .3s ease 1.6s;
  animation: ${props => props.transitionLeaving && css`${hideGallery} .3s ease`};
  animation-fill-mode: both;
  opacity: 0;
  position: absolute;
  top: 0px;
  margin-top: 75px;
  width: 100vw;
  height: calc(100% - 75px);
`;

const Gallery = ({
  activePage,
  loadedContent,
  transitionInProgress,
}) => {
  return (
    <StyledWrapper
      activePage={activePage}
      transitionInProgress={transitionInProgress}
      transitionLeaving={loadedContent[pageData.galleryLink] === 'leaving'}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <GalleryWrapper/>
      </Suspense>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loadedContent: selectLoadedContent(state),
    transitionInProgress: selectTransitionInProgress(state),
  };
};

export default connect (mapStateToProps, null)(Gallery);
