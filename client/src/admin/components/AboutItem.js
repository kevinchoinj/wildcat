import React from 'react';

export default class Item extends React.Component {
  render() {
    if (this.props.label && this.props.body) {
      if (this.props.label.length>=2 && this.props.body.length>=2) {
        return (
          <div {...this.props}>
            <span className="about_label">
              {this.props.label}
            </span>
            <span className="about_body">
            - {this.props.body}
            </span>
          </div>
        );
      }
      else if (this.props.label.length>=2) {
        return (
          <div {...this.props}>
            <span className="about_label">
              {this.props.label}
            </span>
          </div>
        );
      }
      else if (this.props.body.length>=2) {
        return (
          <div {...this.props}>
            <span className="about_body">
              {this.props.body}
            </span>
          </div>
        );
      }
      else {
        return (
          <div {...this.props}>
            (blank space)
          </div>
        );
      }
    }
    else if (this.props.body) {
      if (this.props.body === '') {
        return (
          <div {...this.props}>
            (blank space)
          </div>
        );
      }
      else return (
        <div {...this.props}>
          <span className="about_body">
            {this.props.body}
          </span>
        </div>
      );
    }
    else if (this.props.label) {
      if (this.props.body === '') {
        return (
          <div {...this.props}>
            &nbsp;
          </div>
        );
      }
      else return (
        <div {...this.props}>
          <span className="about_label">
            {this.props.label}
          </span>
        </div>
      );
    }
    else {
      return (
        <div {...this.props}>
          (blank space)
        </div>
      );
    }
  }
}
