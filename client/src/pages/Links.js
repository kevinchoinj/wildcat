import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectTransitionInProgress,
} from 'reducers';

const StyledWrapper = styled.div`
  opacity: ${props => props.transitionInProgress ? 0 : 1};
  transition: .4s ease-out;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100% - 75px);
  position: fixed;
  margin-top: 75px;
  color: var(--gold-color);
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 600;
  overflow-wrap: break-word;
  overflow-y: auto;
`;
const StyledContainer = styled.div`
  padding: 24px 0px;
`;
const StyledTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 700;
  color: var(--gold-color);
  font-size: 36px;
  margin-bottom: 24px;
  &:after,
  &:before {
    content: '';
    background: var(--gold-color);
    height: 1px;
    margin: 6px;
  }
  &:before {
    flex-basis: 16.666666666666%;
  }
  &:after {
    flex: 1;
  }
`;
const StyledOffset = styled.div`
  margin: 2rem 0;
  @media screen and (max-width: 992px) {
    margin: 1rem 0;
  }
  a {
    color: var(--gold-color);
    position: relative;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active,
    &:focus:active {
      color: var(--gold-color);
      text-decoration: none;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      border-bottom: 2px solid var(--gold-color);
      transition: 0.4s;
    }
    &:hover:after {
      width: 100%;
    }
  }
`;
const StyledBody = styled.div`
  ${StyledOffset}:nth-child(odd) {
    width: 83.3333333333%;
    margin-left: 16.6666666666%;
  }
  ${StyledOffset}:nth-child(even) {
    width: 66.6666666666%;
    margin-left: 33.3333333333%;
  }
  @media screen and (max-width: 992px) {
    ${StyledOffset}:nth-child(odd),
    ${StyledOffset}:nth-child(even) {
      width: 100%;
      margin-left: 0px;
      padding: 0px 14px;
    }
  }
`;

const Links = ({transitionInProgress}) => {
  const linkValues = [
    {title: 'I love tributes and my PayPal email is ashleywildcat@outlook.com', link: 'http://paypal.me/ashleywildcat'},
    {title: 'Clips Store', link: 'https://www.clips4sale.com/studio/84041/ashley-wildcat-productions'},
    {title: 'Twitter', link: 'https://twitter.com/ItsAshleyWC'},
    {title: 'Facebook', link: 'https://www.facebook.com/ashley.wildcat.14'},
    {title: 'Amazon Wishlist', link: 'http://www.spoilthewildcat.com'},
    {title: 'Payment', link: 'http://Cash.me/$ashleywildcat'},
    {title: 'Paypal', link: 'http://paypal.me/ashleywildcat'},
    {title: 'VIP Subscription', link: 'https://ashley.knockoutcats.com/subscribe/'},
    {title: 'Fitness Coach', link: 'http://ashleywildcat.isagenix.com/?sc_lang=en-US'},
  ];
  return(
    <StyledWrapper
      transitionInProgress={transitionInProgress}
    >
      <StyledContainer>
        <StyledTitle>
            Links
        </StyledTitle>
        <StyledBody>
          {linkValues.map((value)=>(
            <StyledOffset key={value.title}>
              <a
                href={value.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {value.title}
              </a>
            </StyledOffset>
          ))}
        </StyledBody>
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    transitionInProgress: selectTransitionInProgress(state),
  };
};

export default connect (mapStateToProps, null)(Links);
