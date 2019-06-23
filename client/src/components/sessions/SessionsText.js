import React from 'react';
import SessionsTextRow from 'components/sessions/SessionsTextRow';
import SessionsTextWrapper from 'components/sessions/SessionsTextWrapper';
import {displayValues} from 'data/displayValues';

const listItems = (keyValue) => displayValues[keyValue].map((item, i) => {
  return (
    <div key={`${item.label}-${item.body}${i}`}>
      <SessionsTextRow
        label = {item.label}
        body={item.body}
      />
    </div>
  );
});

const SessionsText = ({keyValue, title}) => {
  return(
    <SessionsTextWrapper title={title}>
      {listItems(keyValue)}
    </SessionsTextWrapper>
  );
};

export default SessionsText;