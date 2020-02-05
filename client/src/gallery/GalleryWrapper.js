import React, {useEffect} from 'react';
import GalleryComponent from 'gallery/GalleryComponent';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
`;

const GalleryWrapper = () => {
  return(
    <StyledWrapper>
      <GalleryComponent/>
    </StyledWrapper>
  );
};

export default GalleryWrapper;