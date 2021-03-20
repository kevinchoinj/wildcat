import React from 'react';
import { connect } from 'react-redux';
import * as contactActions from 'actions/contact';
import ContactForm from 'components/forms/ContactForm';
import styled from 'styled-components';
import {pageData} from 'data/pageData';
import {
  selectTransitionInProgress,
  selectContactContactSending,
} from 'reducers';

const StyledWrapper = styled.div`
  opacity: ${props => props.transitionInProgress ? 0 : 1};
  transition: .3s ease-out;
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
  overflow-y: auto;
`;
const StyledContainer = styled.div`
  padding: 24px 0px;
`;
const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 700;
  color: var(--gold-color);
  font-size: 36px;
  margin-bottom: 24px;
  &:before,
  &:after {
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
  @media screen and (max-width: 992px) {
    text-align: center;
    &:after,
    &:before {
      flex: 1;
    }
  }
`;
const StyledEmail = styled.div`
  font-size: 24px;
  @media screen and (max-width: 992px) {
    font-size: 16px;
  }
`;
const StyledBody = styled.div`
  width: 83.3333333333%;
  margin-left: 16.6666666666%;
  @media screen and (max-width: 992px) {
    width: 100%;
    margin-left: 0px;
    padding: 0px;
    form {
      padding: 0px 14px;
    }
  }
`;
const StyledNotice = styled.div`
  width: 83.3333333333%;
  margin-left: 16.6666666666%;
`;

const Contact = ({transitionInProgress, contactSending, postContact}) => {
  return(
    <StyledWrapper
      transitionInProgress={transitionInProgress}
    >
      <StyledContainer>
        <StyledHeader>
          <div>
            Contact
            <StyledEmail>
              {pageData.emailAddress}
            </StyledEmail>
          </div>
        </StyledHeader>

        <StyledBody>
          <ContactForm onSubmit = {(values)=>postContact(values)}/>
        </StyledBody>

        {contactSending?
          <StyledNotice>Sending...</StyledNotice>
          :
          null}
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    transitionInProgress: selectTransitionInProgress(state),
    contactSending: selectContactContactSending(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postContact: (values) => {
      dispatch(contactActions.postContact(values, '/api/v1/contact'));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Contact);
