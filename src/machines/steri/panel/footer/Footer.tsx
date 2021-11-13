import React from 'react';
import styled from 'styled-components';
import { Button } from '@binarycapsule/ui-capsules';
import { useHistory } from 'react-router-dom';

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
`;

interface Props {}

export const Footer: React.FC<Props> = () => {
  const history = useHistory();
  return (
    <StyledFooter>
      <Button appearance="minimal" iconBefore="ARROW_C_LEFT" onClick={() => history.push('/')}>
        Exit
      </Button>
    </StyledFooter>
  );
};
