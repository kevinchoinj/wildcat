import React from 'react';

class SiteTitle extends React.Component{
  componentWillMount(){
    var link = document.querySelector('link[rel*="icon"]') || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/static/images/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  render(){
    return null;
  }
}
export default SiteTitle;