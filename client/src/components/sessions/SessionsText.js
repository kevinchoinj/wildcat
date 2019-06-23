import React from 'react';
import SessionsTextRow from 'components/sessions/SessionsTextRow';
import SessionsTextWrapper from 'components/sessions/SessionsTextWrapper';
import {displayValues} from 'data/displayValues';

const listItems = (keyValue) => displayValues[keyValue].map((item) => {
  return (
    <div key={item.label}>
      <SessionsTextRow
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