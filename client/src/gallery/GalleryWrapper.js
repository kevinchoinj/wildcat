import React from 'react';
import Scrollbar from 'smooth-scrollbar';
import GalleryComponent from 'gallery/GalleryComponent';

class GalleryWrapper extends React.Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('#scroll_gallery'), {
      alwaysShowTracks: true,
    });
  }
  render(){
    return(
      <div id="scroll_gallery" className="gallery_container">
        <GalleryComponent/>
      </div>
    );
  }
}
export default GalleryWrapper;