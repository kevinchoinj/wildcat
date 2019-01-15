import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pagesActions from 'actions/pages';
import classNames from 'classnames';
import Scrollbar from 'smooth-scrollbar';

class Links extends React.Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('#scroll_links'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
  render(){
    const {
      transitionStatus,
    } = this.props;

    const wrapperName = classNames({
      'links_wrapper': true,
      'links_wrapper--transition': transitionStatus === 'start' || transitionStatus === 'end',
    });

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
      <div className={wrapperName} id="scroll_links">
        <div className="links_container">
          <div className="links_title__wrapper">
            <div className="links_title">
              Links
            </div>
          </div>
          <div className="links_link__container">
            {linkValues.map((value, index)=>(
              <div key={index} className="links_offset">
                <a
                  className="links_link"
                  href={value.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {value.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
  }),
  (dispatch) => ({pagesActions: bindActionCreators(pagesActions, dispatch)}),
)(Links);
