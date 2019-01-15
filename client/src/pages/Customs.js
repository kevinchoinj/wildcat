import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomObject from 'components/CustomObject';
import Scrollbar from 'smooth-scrollbar';
import classNames from 'classnames';
import * as pagesActions from 'actions/pages';
import * as imagesActions from 'actions/images';

import bellaink from 'images/visitors/bellaink.jpg';
import chasynrance from 'images/visitors/chasynrance.jpg';
import damien from 'images/visitors/damien.jpg';
import doublesessions from 'images/visitors/doublesessions.jpg';
import localguy from 'images/visitors/localguy.jpg';
import madisonswan from 'images/visitors/madisonswan.jpg';
import riotstarter from 'images/visitors/riotstarter.jpg';
import salinadelarenta from 'images/visitors/salinadelarenta.jpg';
import vanessavilano from 'images/visitors/vanessavilano.jpg';
import woody from 'images/visitors/woody.jpg';

class Customs extends React.Component {
  componentDidMount(){
    Scrollbar.init(document.querySelector('#scroll_customs'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
  render(){

    const {
      urlValues,
      transitionStatus,
    } = this.props;

    const wrapperName = classNames({
      'kittens_wrapper': true,
      'kittens_wrapper--transition':
        transitionStatus === 'start' ||
        transitionStatus === 'end',
    });

    let displayValues = [];
    if (urlValues.length > 1) {
      displayValues = urlValues;
    }
    else {
      displayValues = [
        {name: 'Riot Starter', subtitle: 'July', url: riotstarter},
        {name: 'Madison Swan', subtitle: 'August 7', url: madisonswan},
        {name: 'Bella Ink', subtitle: 'August', url: bellaink},
        {name: 'Salina De La Renta', subtitle: 'Local', url: salinadelarenta},
        {name: 'Vanessa Vilano', subtitle: 'Local', url: vanessavilano},
        {name: 'Double Sessions', subtitle: 'Email for details!', url: doublesessions},
        {name: 'Chasyn Rance', subtitle: '$200 Minimum', url: chasynrance},
        {name: 'Local Guy', subtitle: 'Local', url: localguy},
        {name: 'Damien', subtitle: 'Local', url: damien},
        {name: 'Woody', subtitle: 'Local', url: woody},
      ];
    }

    return(
      <div className={wrapperName} id="scroll_customs">
        <div className="kittens_container">
          {displayValues ?
            Object.entries(displayValues).map((singleUrl, key) =>
              <div key={key} className="custom_container__inner">
                <CustomObject
                  image={singleUrl[1].url}
                  title={singleUrl[1].name}
                  subtitle={singleUrl[1].subtitle}
                  position="center top"
                />
              </div>
            ):null}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    urlValues: state.admin.images,
    transitionStatus: state.transition.transitionStatus,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(Customs);
