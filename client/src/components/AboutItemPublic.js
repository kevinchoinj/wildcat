import React from 'react';

export default class Item extends React.Component {
  render() {

    const {
      label,
      body,
    } = this.props;

    if (label && body) {
      if (label.length>=2 && body.length>=2) {
        return (
          <div className="about_container">
            <div className="about_label">
              {label}
            </div>
            <div className="about_body">
              {body}
            </div>
          </div>
        );
      }
      else if (label.length>=2) {
        return (
          <div className="about_container about_label">
            {label}
          </div>
        );
      }
      else if (body.length>=2) {
        return (
          <div className="about_container about_body">
            {body}
          </div>
        );
      }
      else {
        return null;
      }
    }
    else if (body) {
      if (body === '') {
        return (
          <div className="about_container">
            &nbsp;
          </div>
        );
      }
      else return (
        <div className="about_container">
          <span className="about_body">
            {body}
          </span>
        </div>
      );
    }
    else if (label) {
      if (body === '') {
        return (
          <div className="about_container">
            &nbsp;
          </div>
        );
      }
      else return (
        <div className="about_container about_label">
          {label}
        </div>
      );
    }
    else {
      return (
        <div className="about_container">
          &nbsp;
        </div>
      );
    }
  }
}
