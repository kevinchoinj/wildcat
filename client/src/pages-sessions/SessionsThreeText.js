import React from 'react';
import {connect} from 'react-redux';
import AboutItemPublic from 'components/AboutItemPublic';
import SessionsTextWrapper from 'pages-sessions/SessionsTextWrapper';

class SessionsOne extends React.Component {
  render(){

    const {
      items,
    } = this.props;

    let displayValues;
    let listItems;

    if (items.sessiontype) {
      displayValues = items.sessiontype;
    }
    else {
      displayValues = [
        {label: 'Fantasy Role-Plays', body: 'These are so much fun! Yahoo! We can get very creative here! Take your wildest wrestling fantasy and let’s make it a reality!'},
        {label: 'Semi-Competitive Wrestling Match', body: 'We will each make some effort to win the match, but having fun is also a priority!!'},
        {label: 'Competitive Wrestling Match', body: 'We each give 100% effort to win the match. FYI, it WILL be me so be prepared to leave your ego and pride at the door when you come to see me! Ha!'},
        {label: 'Scissoring', body: 'My specialty!! You must experience this!! My figure-four, reverse head scissors and reverse head scissors are especially pleasurable and painful. These are so, so HOT and I LOVE to watch you suffer while you are trapped in my scissor holds!!'},
        {label: 'Trampling', body: 'You can do more than just lust after my sexy feet. Experience how they can dominate you in so many different ways.'},
        {label: 'Kicking', body: 'Oh boy, be careful with this one!'},
        {label: 'Boxing', body: 'My punches are as powerful as my choke holds and scissors holds. We can go light or all out!'},
        {label: 'E-Mail or Skype Sessions', body: 'If you cannot meet in person, we can always chat via Skype or e-mail. I have a very sexy mind and I am extremely good at exploring your wrestling fantasies with you using this virtual format. The mind is one of the sexiest parts of our bodies so these sessions can be very hot and fun! These sessions are very easy to set-up, so let’s chat!'},
        {label: '', body: ''},
      ];
    }

    if (displayValues){
      listItems = displayValues.length > 1 ? displayValues.map((item, i) => {
        return (
          <div key={i}>
            <AboutItemPublic
              label = {item.label}
              body={item.body}
            />
          </div>
        );
      }):null;
    }

    return(
      <SessionsTextWrapper
        title = "Session Types"
      >
        {listItems}
      </SessionsTextWrapper>
    );
  }
}
export default connect(
  (state, ownProps) => ({
    items: state.admin.aboutText,
  }),
  dispatch => ({
  }),
)(SessionsOne);