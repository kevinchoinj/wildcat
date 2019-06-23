import React from 'react';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const StyledWrapper = styled.div`
  border-bottom: 1px solid rgba(175,151,89,.16);
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const StyledTitle = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
`;
const StyledSubtitle = styled.div`
  text-align: center;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 16px;
`;

const Image = ({className, src, alt}) => (
  <img
    src={src}
    alt={alt}
    className={className}
  />
);
const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  transition: .2s ease-out;
  object-fit: cover;
  &:hover {
    transform: scale(1.03, 1.03);
  }
`;

const CustomObject = ({hoverCustomImage, image, title, subtitle, transitionInProgress}) => {
  return (
    <StyledWrapper transitionInProgress={transitionInProgress}>
      <StyledContainer>
        <StyledTitle>
          {title}
        </StyledTitle>
        <StyledSubtitle>
          {subtitle}
        </StyledSubtitle>
      </StyledContainer>

      <StyledContainer onMouseEnter={() => hoverCustomImage(image)}>
        <StyledImage
          src={image}
          alt={title}
        />
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    hoverCustomImage: (imageUrl) => {
      dispatch(imagesActions.hoverCustomImage(imageUrl));
    }
  };
};

export default connect (null, mapDispatchToProps)(CustomObject);