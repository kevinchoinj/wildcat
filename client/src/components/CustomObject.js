import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imagesActions from 'actions/images';

class CustomObject extends React.Component {

  hoverCustomImage = (imageUrl) => {
    this.props.imagesActions.hoverCustomImage(imageUrl);
  }

  render() {

    const {
      image,
      title,
      subtitle,
    } = this.props;

    const imageStyle={
      backgroundImage: 'url('+image+')',
    };

    return (
      <div className="custom_subwrapper">
        <div className="custom_subwrapper__half">
          <div className="custom_title">
            {title}
          </div>
          <div className="custom_subtitle">
            {subtitle}
          </div>
        </div>

        <div className="custom_subwrapper__half">
          <div
            className="custom_image"
            style={imageStyle}
            onMouseEnter = {()=>this.hoverCustomImage(image)}
          >
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(CustomObject);