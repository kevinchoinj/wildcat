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

    if (items.stats) {
      displayValues = items.stats;
    }
    else {
      displayValues = [
        {label: 'Location', body: 'West Palm Beach, Florida'},
        {label: 'Age', body: '31'},
        {label: 'Height', body: '5\' 9"'},
        {label: 'Weight', body: '140 lbs.'},
        {label: 'Physique', body: 'Athletic'},
        {label: 'Thighs', body: '27"'},
        {label: 'Quads', body: '21.0”'},
        {label: 'Calves', body: '13.0“'},
        {label: 'Biceps', body: '11.0”'},
        {label: 'Sponsoring Ashley Wildcat to Visit Your City', body: 'Ashley LOVES to travel so she is more than happy to make a special trip to see you, wherever you live, if you can help her with her expenses. Typically, a sponsorship would require coverage of Ashley\'s airfare, hotel accommodations, and session fee. If you are interested in setting up a session, please e-mail Ashley at ashleywildcat@outlook.com for more information.'},
        {label: 'Custom Video Rates', body: 'The price for producing a custom video is based on the desired length of the video, the number of wrestlers/actors needed, and the type of action/story. If you are interested in requesting a custom video, please e-mail Ashley at ashleywildcat@outlook.com for more information. $100 minimum on all sessions. A deposit of $100 is required.'},
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
        title="Stats"
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