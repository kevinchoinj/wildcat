import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {pageData} from 'data/pageData';

class HomeOverlay extends React.Component {
  render() {
    const {
      loadedContent,
    } = this.props;

    const overlayName = classNames({
      'home_overlay': true,
      'home_overlay--displayed': loadedContent[pageData.homeLink],
    });
    return (
      <div className={overlayName}>
        <div className="home_overlay__subtext">
          <strong>This is more than just work for me.</strong>
          <br/><br/>
          This is an addiction of mine.
          With that being said.. If you are creepy or even ask for anything sexual/sensual
          I will not even respond. I have a $100 minimum for anything (like Skype, phone, email, pics)
          My rate is $400 hour then $300 for any additional hour (unless you are an original client before
          I raised my rates-then you are locked in) I give a $50 discount if you allow me to film our
          match and sell it on my video sites. My PayPal email is ashleywildcat@outlook.com It’s always
          good to get my attention by sending money since I have very expensive taste <span role="img" aria-label="crying laughing emoji">😂</span>
          <br/><br/>
          Let’s have some fun and hope to see you on the mats
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    loadedContent: state.transition.loadedContent,
  }),
  dispatch => ({
  }),
)(HomeOverlay);