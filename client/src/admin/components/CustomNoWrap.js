import React from 'react';

export default class CustomNoWrap extends React.Component {
  render() {
    const imageStyle={
      backgroundImage: 'url('+this.props.image+')',
      backgroundPosition: this.props.position,
    };
    return (
      <div className="admin_custom_subwrapper">
        <div className="admin_custom_title">
          {this.props.title}
        </div>
        <div className="admin_custom_subtitle">
          {this.props.subtitle}
        </div>
        <div
          className="admin_custom_container"
        >
          <div
            className="admin_custom_image"
            style={imageStyle}
          >
          </div>
        </div>
      </div>
    );
  }
}
