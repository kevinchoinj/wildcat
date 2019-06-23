import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-image: url(/static/images/vegasimage.jpg);
    video {
      position: fixed;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -100;
      transform: translateX(-50%) translateY(-50%);
      background-size: cover;
    }
`;

const Background = () => {
  return (
    <StyledWrapper>
      <video
        loop
        playsInline
        muted
        autoPlay="autoplay"
        id="iobg"
      >
        <source
          src='/static/images/vegaswebm.webm'
          type="video/webm"
        />
        <source
          src='/static/images/vegas.mp4'
          type="video/mp4"
          id="top-image"
        />
      </video>
    </StyledWrapper>
  );
};

export default Background;