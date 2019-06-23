import React from 'react';
import Viewer from 'gallery/Viewer';
import {displayValues} from 'data/displayValues';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  top: 0px;
  width: 100%;
  height: 100%;
  padding-left: 16.66666666666666%;
  @media screen and (max-width: 992px) {
    padding-left: 0;
  }
`;

const GalleryComponent = () => {
  return (
    <StyledWrapper>
      <Viewer images={displayValues.galleryImages.map(({caption, id}) => ({
        src: id,
        thumbnail: id,
        caption,
      }))} />
    </StyledWrapper>
  );
};

export default GalleryComponent;