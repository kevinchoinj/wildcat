import React from 'react';
import Viewer from 'gallery/Viewer';
function makeUnsplashSrc (id) {
  return id;
}

function makeUnsplashThumbnail (id) {
  return id;
}
const DEFAULT_IMAGES = [
  { id: '/static/images/gallery/26.jpg'},
  { id: '/static/images/gallery/28.jpg'},
  { id: '/static/images/gallery/2.jpg'},
  { id: '/static/images/gallery/4.jpg'},
  { id: '/static/images/gallery/5.jpg'},
  { id: '/static/images/gallery/56.jpg'},
  { id: '/static/images/gallery/8.jpg'},
  { id: '/static/images/gallery/33.jpg'},
  { id: '/static/images/gallery/37.jpg'},
  { id: '/static/images/gallery/12.jpg'},
  { id: '/static/images/gallery/14.jpg'},
  { id: '/static/images/gallery/15.jpg'},
  { id: '/static/images/gallery/16.jpg'},
  { id: '/static/images/gallery/17.jpg'},
  { id: '/static/images/gallery/18.jpg'},
  { id: '/static/images/gallery/19.jpg'},
  { id: '/static/images/gallery/20.jpg'},
  { id: '/static/images/gallery/21.jpg'},
  { id: '/static/images/gallery/22.jpg'},
  { id: '/static/images/gallery/23.jpg'},
  { id: '/static/images/gallery/24.jpg'},
  { id: '/static/images/gallery/25.jpg'},
  { id: '/static/images/gallery/29.jpg'},
  { id: '/static/images/gallery/30.jpg'},
  { id: '/static/images/gallery/31.jpg'},
  { id: '/static/images/gallery/32.jpg'},
  { id: '/static/images/gallery/34.jpg'},
  { id: '/static/images/gallery/35.jpg'},
  { id: '/static/images/gallery/36.jpg'},
  { id: '/static/images/gallery/38.jpg'},
  { id: '/static/images/gallery/39.jpg'},
  { id: '/static/images/gallery/40.jpg'},
  { id: '/static/images/gallery/41.jpg'},
  { id: '/static/images/gallery/42.jpg'},
  { id: '/static/images/gallery/43.jpg'},
  { id: '/static/images/gallery/44.jpg'},
  { id: '/static/images/gallery/45.jpg'},
  { id: '/static/images/gallery/46.jpg'},
  { id: '/static/images/gallery/47.jpg'},
  { id: '/static/images/gallery/48.jpg'},
  { id: '/static/images/gallery/49.jpg'},
  { id: '/static/images/gallery/50.jpg'},
  { id: '/static/images/gallery/51.jpg'},
  { id: '/static/images/gallery/52.jpg'},
  { id: '/static/images/gallery/53.jpg'},
  { id: '/static/images/gallery/54.jpg'},
  { id: '/static/images/gallery/55.jpg'},
  { id: '/static/images/gallery/57.jpg'},
  { id: '/static/images/gallery/58.jpg'},
  { id: '/static/images/gallery/59.jpg'},
  { id: '/static/images/gallery/60.jpg'},
  { id: '/static/images/gallery/3.jpg'},
  { id: '/static/images/gallery/1.jpg'},
  { id: '/static/images/gallery/6.jpg'},
  { id: '/static/images/gallery/9.jpg'},
  { id: '/static/images/gallery/10.jpg'},
  { id: '/static/images/gallery/13.jpg'},
  { id: '/static/images/gallery/7.jpg'},
  { id: '/static/images/gallery/11.jpg'},
];

export default class Gallerycomp extends React.Component{

  render(){
    return (
      <div className="gallery_images">
        <Viewer images={DEFAULT_IMAGES.map(({ caption, id }) => ({
          src: makeUnsplashSrc(id),
          thumbnail: makeUnsplashThumbnail(id),
          caption,
        }))} />
      </div>
    );
  }
}
