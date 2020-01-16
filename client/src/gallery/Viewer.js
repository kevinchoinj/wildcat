import React, {useState} from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';

const Link = ({src, className, index, children, openLightbox}) => (
  <a
    href={src}
    className={className}
    onClick={(e) => openLightbox(index, e)}
  >
    {children}
  </a>
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
  return (
    <React.Fragment>
      <RenderGallery
        images={images}
        openLightbox = {openLightbox}
      />
      <ModalGateway>
        {lightboxOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </React.Fragment>
  );
};

export default Viewer;