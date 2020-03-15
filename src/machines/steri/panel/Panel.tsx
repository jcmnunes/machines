import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Navigation } from './navigation/Navigation';
import { Automatic } from './automatic/Automatic';
import { Manual } from './manual/Manual';
import { Footer } from './footer/Footer';
import { SteriContext } from '../steriMachine';

const StyledPanel = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.neutral300};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const PanelBody = styled.div`
  flex: 1;
  padding: 0 16px;
  position: relative;
`;

interface Props {
  context: SteriContext;
}

export const Panel: React.FC<Props> = ({ context }) => {
  const { mode } = useParams();
  return (
    <StyledPanel>
      <Navigation />
      <PanelBody>
        {mode === 'automatic' && <Automatic />}
        {mode === 'manual' && <Manual context={context} />}
      </PanelBody>
      <Footer />
    </StyledPanel>
  );
};
