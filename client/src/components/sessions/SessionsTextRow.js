import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 7px 0px;
`;
const StyledLabel = styled.div`
  font-weight: 600;
  color: var(--gold-color);
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 1px;
  margin: 7px 0px;
`;
const StyledBody = styled.div`
  color: var(--white-color);
  font-size: 16px;
  line-height: 27.2px;
  letter-spacing: 1px;
`;
const Label = ({label}) => {
  return label ?(
    <StyledLabel>
      {label}
    </StyledLabel>
  ) : null;
};

const Body = ({body}) => {
  return body ? (
    <StyledBody>
      {body}
    </StyledBody>
  ) : null;
};

const SessionsTextRow = ({label, body}) => {
  return (
    <StyledWrapper>
      <Label label={label}/>
      <Body body={body}/>
    </StyledWrapper>
  );
};

export default SessionsTextRow;