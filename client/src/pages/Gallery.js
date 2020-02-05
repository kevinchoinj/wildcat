import React, {Suspense} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectTransitionInProgress,
} from 'reducers';
const GalleryWrapper = React.lazy(() => import('../gallery/GalleryWrapper'));

const StyledWrapper = styled.div`
  opacity: ${props => props.transitionInProgress ? 0 : 1};
  position: absolute;
  top: 0px;
  margin-top: 75px;
  width: 100vw;
  height: calc(100% - 75px);
  transition: .4s ease-out;
`;

const Gallery = ({transitionInProgress}) => {
  return (
    <StyledWrapper transitionInProgress={transitionInProgress}>
      <Suspense fallback={<div>Loading...</div>}>
        <GalleryWrapper/>
      </Suspense>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    transitionInProgress: selectTransitionInProgress(state),
  };
};

export default connect (mapStateToProps, null)(Gallery);
