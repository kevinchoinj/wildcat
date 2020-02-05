import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import CustomObject from 'components/CustomObject';
import {displayValues} from 'data/displayValues';
import styled from 'styled-components';
import {
  selectTransitionInProgress,
} from 'reducers';

const StyledWrapper = styled.div`
  opacity: ${props => props.transitionInProgress ? 0 : 1};
  transition: .3s ease;
  display: flex;
  flex-direction: row;
  width: 100vw;
  position: fixed;
  margin-top: 75px;
  color: var(--gold-color);
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: 600;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
`;
const StyledContainer = styled.div`
  height: calc(100% - 75px);
  width: 100%;
  padding-left: 33.3333333333%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 992px) {
    padding-left: 0;
  }
`;
const StyledObject = styled.div`
  height: 50%;
  width: 50%;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Customs = ({transitionInProgress}) => {
  return(
    <StyledWrapper
      transitionInProgress={transitionInProgress}
    >
      <StyledContainer>
        {displayValues.customs.map((value) =>
          <StyledObject key={value.name}>
            <CustomObject
              image={value.url}
              title={value.name}
              subtitle={value.subtitle}
              position="center top"
            />
          </StyledObject>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    transitionInProgress: selectTransitionInProgress(state),
  };
};

export default connect (mapStateToProps, null)(Customs);
