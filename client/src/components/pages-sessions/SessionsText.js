import React from 'react';
import AboutItemPublic from 'components/AboutItemPublic';
import SessionsTextWrapper from 'components/pages-sessions/SessionsTextWrapper';
import {displayValues} from 'data/displayValues';

const listItems = (keyValue) => displayValues[keyValue].map((item) => {
  return (
    <div key={item.label}>
      <AboutItemPublic
        label = {item.label}
        body={item.body}
      />
    </div>
  );
});

const SessionsOneText = ({keyValue}) => {
  return(
    <SessionsTextWrapper title="Stats">
      {listItems(keyValue)}
    </SessionsTextWrapper>
  );
};

export default SessionsOneText;