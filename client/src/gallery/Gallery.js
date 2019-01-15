import React from 'react';
import Viewer from 'gallery/Viewer';

import image1 from 'images/gallery/1.jpg';
import image2 from 'images/gallery/2.jpg';
import image3 from 'images/gallery/3.jpg';
import image4 from 'images/gallery/4.jpg';
import image5 from 'images/gallery/5.jpg';
import image6 from 'images/gallery/6.jpg';
import image7 from 'images/gallery/7.jpg';
import image8 from 'images/gallery/8.jpg';
import image9 from 'images/gallery/9.jpg';

import image10 from 'images/gallery/10.jpg';
import image11 from 'images/gallery/11.jpg';
import image12 from 'images/gallery/12.jpg';
import image13 from 'images/gallery/13.jpg';
import image14 from 'images/gallery/14.jpg';
import image15 from 'images/gallery/15.jpg';
import image16 from 'images/gallery/16.jpg';
import image17 from 'images/gallery/17.jpg';
import image18 from 'images/gallery/18.jpg';
import image19 from 'images/gallery/19.jpg';

import image20 from 'images/gallery/20.jpg';
import image21 from 'images/gallery/21.jpg';
import image22 from 'images/gallery/22.jpg';
import image23 from 'images/gallery/23.jpg';
import image24 from 'images/gallery/24.jpg';
import image25 from 'images/gallery/25.jpg';
import image26 from 'images/gallery/26.jpg';
import image28 from 'images/gallery/28.jpg';
import image29 from 'images/gallery/29.jpg';

import image30 from 'images/gallery/30.jpg';
import image31 from 'images/gallery/31.jpg';
import image32 from 'images/gallery/32.jpg';
import image33 from 'images/gallery/33.jpg';
import image34 from 'images/gallery/34.jpg';
import image35 from 'images/gallery/35.jpg';
import image36 from 'images/gallery/36.jpg';
import image37 from 'images/gallery/37.jpg';
import image38 from 'images/gallery/38.jpg';
import image39 from 'images/gallery/39.jpg';

import image40 from 'images/gallery/40.jpg';
import image41 from 'images/gallery/41.jpg';
import image42 from 'images/gallery/42.jpg';
import image43 from 'images/gallery/43.jpg';
import image44 from 'images/gallery/44.jpg';
import image45 from 'images/gallery/45.jpg';
import image46 from 'images/gallery/46.jpg';
import image47 from 'images/gallery/47.jpg';
import image48 from 'images/gallery/48.jpg';
import image49 from 'images/gallery/49.jpg';

import image50 from 'images/gallery/50.jpg';
import image51 from 'images/gallery/51.jpg';
import image52 from 'images/gallery/52.jpg';
import image53 from 'images/gallery/53.jpg';
import image54 from 'images/gallery/54.jpg';
import image55 from 'images/gallery/55.jpg';
import image56 from 'images/gallery/56.jpg';

import image57 from 'images/gallery/57.jpg';
import image58 from 'images/gallery/58.jpg';
import image59 from 'images/gallery/59.jpg';
import image60 from 'images/gallery/60.jpg';

function makeUnsplashSrc (id) {
  return id;
}

function makeUnsplashThumbnail (id) {
  return id;
}
const DEFAULT_IMAGES = [
  { id: image26},
  { id: image28},
  { id: image2},
  { id: image4},
  { id: image5},
  { id: image56},
  { id: image8},
  { id: image33},
  { id: image37},
  { id: image12},
  { id: image14},
  { id: image15},
  { id: image16},
  { id: image17},
  { id: image18},
  { id: image19},
  { id: image20},
  { id: image21},
  { id: image22},
  { id: image23},
  { id: image24},
  { id: image25},
  { id: image29},
  { id: image30},
  { id: image31},
  { id: image32},
  { id: image34},
  { id: image35},
  { id: image36},
  { id: image38},
  { id: image39},
  { id: image40},
  { id: image41},
  { id: image42},
  { id: image43},
  { id: image44},
  { id: image45},
  { id: image46},
  { id: image47},
  { id: image48},
  { id: image49},
  { id: image50},
  { id: image51},
  { id: image52},
  { id: image53},
  { id: image54},
  { id: image55},
  { id: image57},
  { id: image58},
  { id: image59},
  { id: image60},
  { id: image3},
  { id: image1},
  { id: image6},
  { id: image9},
  { id: image10},
  { id: image13},
  { id: image7},
  { id: image11},
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
