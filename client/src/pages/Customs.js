import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomObject from 'components/CustomObject';
import Scrollbar from 'smooth-scrollbar';
import classNames from 'classnames';
import * as pagesActions from 'actions/pages';
import * as imagesActions from 'actions/images';

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
        {name: 'Riot Starter', subtitle: 'July', url: '/static/images/visitors/riotstarter.jpg'},
        {name: 'Madison Swan', subtitle: 'August 7', url: '/static/images/visitors/madisonswan.jpg'},
        {name: 'Bella Ink', subtitle: 'August', url: '/static/images/visitors/bellaink.jpg'},
        {name: 'Salina De La Renta', subtitle: 'Local', url: '/static/images/visitors/salinadelarenta.jpg'},
        {name: 'Vanessa Vilano', subtitle: 'Local', url: '/static/images/visitors/vanessavilano.jpg'},
        {name: 'Double Sessions', subtitle: 'Email for details!', url: '/static/images/visitors/doublesessions.jpg'},
        {name: 'Chasyn Rance', subtitle: '$200 Minimum', url: '/static/images/visitors/chasynrance.jpg'},
        {name: 'Local Guy', subtitle: 'Local', url: '/static/images/visitors/localguy.jpg'},
        {name: 'Damien', subtitle: 'Local', url: '/static/images/visitors/damien.jpg'},
        {name: 'Woody', subtitle: 'Local', url: '/static/images/visitors/woody.jpg'},
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
