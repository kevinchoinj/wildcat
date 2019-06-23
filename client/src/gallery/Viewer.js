import React, {useState} from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';

const Link = ({className, index, children, openLightbox}) => (
  <div
    className={className}
    onClick={(e) => openLightbox(index, e)}
  >
    {children}
  </div>
);
const StyledThumbnail = styled(Link)`
  padding: 0px;
  margin: 0px;
  height: calc(50vh - 37.5px);
  width: 16.6666666666666vw;
  overflow: hidden;
  cursor: pointer;
  img {
    margin: 0px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: .3s ease;
    &:hover {
      transform: scale(1.05, 1.05);
    }
  }
  @media screen and (max-width: 992px) {
    width: 50vw;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RenderGallery = ({images, openLightbox}) => {
  if (!images) return;
  const gallery = images.map((obj, i) => {
    return (
      <StyledThumbnail
        src={obj.src}
        key={obj.src}
        index={i}
        openLightbox={openLightbox}
      >
        <img src={obj.thumbnail} alt="Ashley Wildcat"/>
      </StyledThumbnail>
    );
  });

  return (
    <StyledContainer>
      {gallery}
    </StyledContainer>
  );
};

const Viewer = ({images}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index, event) => {
    event.preventDefault();
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxOpen(false);
  };
  const handleClickImage = () => {
    if (currentImage === images.length - 1) {
      return;
    }
    setCurrentImage(currentImage + 1);
  };
  return (
    <div>
      <RenderGallery
        images={images}
        openLightbox = {openLightbox}
      />
      <Lightbox
        currentImage={currentImage}
        images={images}
        isOpen={lightboxOpen}
        onClickImage={handleClickImage}
        onClickNext={() => setCurrentImage(currentImage + 1)}
        onClickPrev={() => setCurrentImage(currentImage - 1)}
        onClose={closeLightbox}
        backdropClosesModal={true}
        openLightbox = {openLightbox}
      />
    </div>
  );
};

export default Viewer;