import React from 'react';
import Lightbox from 'react-images';

export default class Viewer extends React.Component{
  constructor () {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  imagehover(){
    this.setState({
      hover:true
    });
  }


  renderGallery () {
    const { images } = this.props;

    if (!images) return;
    const gallery = images.map((obj, i) => {
      return (
        <a
          href={obj.src}
          className="thumbnail"
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.thumbnail} alt="Ashley Wildcat"/>
        </a>
      );
    });

    return (
      <div className="gallery_object_container">
        {gallery}
      </div>
    );
  }

  render(){

    return (
      <div className="section">
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={this.props.showThumbnails}
          theme={this.props.theme}
          backdropClosesModal={true}
        />
      </div>
    );
  }
}
