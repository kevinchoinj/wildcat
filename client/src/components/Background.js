import React from 'react';
import bgvideo from 'images/vegas.mp4';
import bgposter from 'images/vegasimage.jpg';
import bgwebm from 'images/vegaswebm.webm';

class Background extends React.Component {
  render(){
    const bgimage={
      backgroundImage: 'url('+bgposter+')',
    };
    return(
      <div className="main_background" style={bgimage}>
        <video
          loop
          playsInline
          muted
          autoPlay="autoplay"
          id="iobg"
          className='video'
        >
          <source
            src={bgwebm}
            type="video/webm"
          />
          <source
            src={bgvideo}
            type="video/mp4"
            id="top-image"
          />
        </video>
      </div>
    );
  }
}

export default Background;