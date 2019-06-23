import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomObject from 'components/CustomObject';
import Scrollbar from 'smooth-scrollbar';
import classNames from 'classnames';
import * as pagesActions from 'actions/pages';
import * as imagesActions from 'actions/images';
import {displayValues} from 'data/displayValues';
class Customs extends React.Component {
  componentDidMount(){
    Scrollbar.init(document.querySelector('#scroll_customs'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
  render(){

    const {
      transitionStatus,
    } = this.props;

    const wrapperName = classNames({
      'kittens_wrapper': true,
      'kittens_wrapper--transition':
        transitionStatus === 'start' ||
        transitionStatus === 'end',
    });


    return(
      <div className={wrapperName} id="scroll_customs">
        <div className="kittens_container">
          {displayValues.customs.map((value) =>
            <div key={value.name} className="custom_container__inner">
              <CustomObject
                image={value.url}
                title={value.name}
                subtitle={value.subtitle}
                position="center top"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    transitionStatus: state.transition.transitionStatus,
  }),
  dispatch => ({
    pagesActions: bindActionCreators(pagesActions, dispatch),
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(Customs);
