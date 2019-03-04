import React from 'react';

class Background extends React.Component {
  render(){
    const bgimage={
      backgroundImage: 'url(/static/images/vegasimage.jpg)',
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
            src={'/static/images/vegaswebm.webm'}
            type="video/webm"
          />
          <source
            src='/static/images/vegas.mp4'
            type="video/mp4"
            id="top-image"
          />
        </video>
      </div>
    );
  }
}

export default Background;