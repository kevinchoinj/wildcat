import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contactActions from 'actions/contact';
import * as pagesActions from 'actions/pages';
import classNames from 'classnames';
import Scrollbar from 'smooth-scrollbar';

import ContactForm from 'components/forms/ContactForm';
import {pageData} from 'data/pageData';

class Contact extends React.Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('#scroll_contact'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }

  submitForm = values => {
    return this.props.contactActions.postContact(values, '/api/v1/contact');
  }

  render(){
    const {
      transitionStatus,
      contactSending,
    } = this.props;

    const wrapperName = classNames({
      'contact_wrapper': true,
      'contact_wrapper--transition': transitionStatus === 'start' || transitionStatus === 'end',
    });

    return(
      <div className={wrapperName} id="scroll_contact">
        <div className="contact_container">
          <div className="contact_title__wrapper">
            <div className="contact_title">
              Contact
              <div className="contact_email">
                {pageData.emailAddress}
              </div>
            </div>
          </div>

          <div className="contact_form_container">
            <ContactForm onSubmit = {this.submitForm}/>
          </div>

          {contactSending?
            <div className="left_offset">Sending...</div>
            :
            null}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
    contactSending: state.contact.contactSending,
  }),
  (dispatch) => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
    contactActions: bindActionCreators(contactActions, dispatch)
  }),
)(Contact);
