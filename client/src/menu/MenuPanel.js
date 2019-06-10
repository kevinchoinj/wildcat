import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import * as pagesActions from 'actions/pages';
import {pageData} from 'data/pageData';

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
          aria-label="twitter"
        >
          <svg className="menu_social_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a
          href={facebookUrl}
          target='_blank'
          rel='noopener noreferrer'
          aria-label="facebook"
        >
          <svg className="menu_social_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
        </a>
        <br/>
        <a href={emailUrl} className="menu_link" aria-label="email">
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
