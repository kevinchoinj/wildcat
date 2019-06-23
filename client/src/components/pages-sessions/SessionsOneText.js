import React from 'react';
import AboutItemPublic from 'components/AboutItemPublic';
import SessionsTextWrapper from 'components/pages-sessions/SessionsTextWrapper';
import {displayValues} from 'data/displayValues';

const listItems = () => displayValues.sessionsOne.map((item) => {
  return (
    <div key={item.label}>
      <AboutItemPublic
        label = {item.label}
        body={item.body}
      />
    </div>
  );
});

const SessionsOneText = () => {
  return(
    <SessionsTextWrapper title="Stats">
      {listItems()}
    </SessionsTextWrapper>
  );
};

export default SessionsOneText;