import React from 'react';
import {Link} from 'react-router-dom';
import {pageData} from 'data/pageData';

class MenuBar extends React.Component {
  render(){
    return(
      <div className="menu_bar" role="banner">
        <Link to={pageData.homeLink} className="menu_bar__link">
          ASHLEY WILDCAT
        </Link>
      </div>
    );
  }
}

export default MenuBar;