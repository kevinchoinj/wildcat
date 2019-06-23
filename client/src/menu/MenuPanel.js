import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as pagesActions from 'actions/pages';
import {pageData} from 'data/pageData';
import styled from 'styled-components';
import {
  selectPagesMenuDisplayed,
  selectLoadedContent,
} from 'reducers';

const StyledIndicator = styled.div`
  top: 12px;
  position: absolute;
  width: 100%;
  border-right: 8px solid var(--gold-color);
  border-left: 8px solid var(--gold-color);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  display: none;
  box-sizing: border-box;
`;
const StyledLink = styled.div`
  a {
    color: var(--white-color);
    text-decoration: none;
    transition-duration: .2s;
    transition-timing-function: ease-out;
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: var(--gold-color);
    }
  }
`;
const StyledSelector = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;
  color: ${props => props.selected && 'var(--gold-color)'};
  cursor: ${props => props.selected && 'default'};
  ${StyledIndicator} {
    display: ${props => props.selected && 'block'};
  }
`;
const MenuOptionDisplay= ({link, name, selected, closeMenu}) => {
  return (
    <StyledLink>
      <Link to={link} onClick={closeMenu}>
        <StyledSelector selected={selected}>
          {name}
          <StyledIndicator/>
        </StyledSelector>
      </Link>
    </StyledLink>
  );
};

const StyledWrapper = styled.div`
  width: 16.66666666666666vw;
  left: -16.66666666666666vw;
  height: 100%;
  background-color: var(--grey-dark-color);
  position: fixed;
  padding-top: 75px;
  top: 0px;
  font-size: 16px;
  font-family: 'Lato', Helvetica;
  text-align: center;
  transition-duration: .3s;
  transition-timing-function: ease-out;
  z-index: 12;
  transform: ${props => props.menuDisplay && 'translateX(16.66666666666666vw)'};
  @media screen and (max-width: 992px) {
    width: 260px;
    left: -260px;
    transform: ${props => props.menuDisplay && 'translateX(260px)'};
  }
  svg {
    margin: 10px;
    font-size: 28px;
    fill: var(--white-color);
    transition-duration: .2s;
    transition-timing-function: ease-out;
    &:hover {
      fill: var(--gold-color);
    }
  }
`;

const StyledOutlink = styled.div`
  a {
    color: var(--white-color);
    text-decoration: none;
    transition-duration: .2s;
    transition-timing-function: ease-out;
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: var(--gold-color);
    }
  }
`;
const StyledOutlinkObject = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;
  background-color: var(--gold-color);
  color: #000;
  transition-duration: .2s;
  transition-timing-function: ease-out;
  &:hover {
    color :var(--white-color);
  }
`;
const MenuPanel = ({closeMenu, menuDisplay, loadedContent}) => {
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
    <StyledWrapper menuDisplay={menuDisplay}>
      {menuValues.map((value)=>(
        <MenuOptionDisplay
          key={value.text}
          name = {value.text}
          link = {value.link}
          selected = {value.selected}
          closeMenu = {() => closeMenu()}
        />
      ))}
      {linkValues.map((value)=>(
        <StyledOutlink key={value.link}>
          <a
            href={value.link}
            target='_blank'
            rel='noopener noreferrer'
            onClick={()=>closeMenu()}
          >
            <StyledOutlinkObject>
              {value.text}
            </StyledOutlinkObject>
          </a>
        </StyledOutlink>
      ))}
      <br/><br/>
      <a
        href={twitterUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label="twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
      </a>
      <a
        href={facebookUrl}
        target='_blank'
        rel='noopener noreferrer'
        aria-label="facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
      </a>
      <br/>
      <StyledOutlink>
        <a href={emailUrl} aria-label="email">
          {EMAIL_ADDRESS}
        </a>
      </StyledOutlink>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    menuDisplay: selectPagesMenuDisplayed(state),
    loadedContent: selectLoadedContent(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => {
      dispatch(pagesActions.toggleMenu(false));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(MenuPanel);