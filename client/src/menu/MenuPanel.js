import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as pagesActions from 'actions/pages';
import {pageData} from 'data/pageData';
import SocialLogo from 'social-logos';

const MenuOptionDisplay= ({link, name, selected, closeMenu}) => {
  const indicatorName = classNames({
    'menu_select': true,
    'menu_select--selected': selected,
  });
  return (
    <div>
      <Link to={link} className='menu_link' onClick={closeMenu}>
        <div className={indicatorName}>
          {name}
          <div className='menu_indicator'></div>
        </div>
      </Link>
    </div>
  );
};

class MenuPanel extends React.Component{
  closeMenu = () => {
    this.props.pagesActions.toggleMenu(false);
  }
  render(){
    const {
      menuDisplayed,
      loadedContent,
    } = this.props;

    const panelName = classNames({
      'menu': true,
      'menu--displayed': menuDisplayed,
    });

    const EMAIL_ADDRESS = pageData.emailAddress;

    const membershipUrl = pageData.membershipUrl;
    const scheduleUrl = pageData.scheduleUrl;
    const clipsUrl = pageData.clipsUrl;

    const twitterUrl = pageData.twitterUrl;
    const facebookUrl = pageData.facebookUrl;
    const emailUrl = 'mailto:' + pageData.emailAddress;

    const homeSelected = (loadedContent[pageData.homeLink]);
    const sessionsSelected = (
      loadedContent[pageData.sessionsOneLink] ||
      loadedContent[pageData.sessionsTwoLink] ||
      loadedContent[pageData.sessionsThreeLink]
    );
    const customsSelected  = (loadedContent[pageData.kittensLink]);
    const gallerySelected  = (loadedContent[pageData.galleryLink]);
    const linksSelected  = (loadedContent[pageData.linksLink]);
    const contactSelected  = (loadedContent[pageData.contactLink]);

    const menuValues = [
      {text: 'HOME', link: pageData.homeLink, selected: homeSelected},
      {text: 'SESSIONS', link: pageData.sessionsOneLink, selected: sessionsSelected},
      {text: 'CUSTOMS', link: pageData.kittensLink, selected: customsSelected},
      {text: 'GALLERY', link: pageData.galleryLink, selected: gallerySelected},
      {text: 'LINKS', link: pageData.linksLink, selected: linksSelected},
      {text: 'CONTACT', link: pageData.contactLink, selected: contactSelected},
    ];
    const linkValues = [
      {text: 'MEMBERSHIP', link: membershipUrl},
      {text: 'SCHEDULE', link: scheduleUrl},
      {text: 'CLIPS', link: clipsUrl},
    ];
    return(
      <div className={panelName}>

        {menuValues.map((value, index)=>(
          <div key={index}>
            <MenuOptionDisplay
              name = {value.text}
              link = {value.link}
              selected = {value.selected}
              closeMenu = {this.closeMenu}
            />
          </div>
        ))}

        {linkValues.map((value, index)=>(
          <div key={index}>
            <a
              href={value.link}
              target='_blank'
              rel='noopener noreferrer'
              className='menu_link'
              onClick={this.props.toggler}
            >
              <div className='menu_outlink'>
                {value.text}
              </div>
            </a>
          </div>
        ))}

        <br/><br/>
        <a
          href={twitterUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialLogo className="menu_social_icon" icon="twitter" size={36}/>
        </a>
        <a
          href={facebookUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <SocialLogo className="menu_social_icon" icon="facebook" size={36}/>
        </a>
        <br/>
        <a href={emailUrl} className="menu_link">
          <div role="contentinfo">
            {EMAIL_ADDRESS}
          </div>
        </a>

      </div>

    );
  }
}

export default connect(
  (state, ownProps) => ({
    menuDisplayed: state.pages.menuDisplayed,
    loadedContent: state.transition.loadedContent,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(MenuPanel);
