import React, {useEffect} from 'react';
import Scrollbar from 'smooth-scrollbar';
import GalleryComponent from 'gallery/GalleryComponent';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: calc(100vh - 75px);
`;

const GalleryWrapper = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector('#scroll_gallery'), {
      alwaysShowTracks: true,
    });
  }, []);
  return(
    <StyledWrapper id="scroll_gallery">
      <GalleryComponent/>
    </StyledWrapper>
  );
};

export default GalleryWrapper;