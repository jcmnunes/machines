import React from 'react';
import styled from 'styled-components';
import { Prompt, Redirect } from 'react-router-dom';
import { Navigation } from './navigation/Navigation';
import { Automatic } from './automatic/Automatic';
import { Manual } from './manual/Manual';
import { Footer } from './footer/Footer';
import { SteriContext } from '../automatic/automatic.machine';

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
  mode: string | undefined;
}

const allowedRoutes = ['automatic', 'manual'];

export const Panel: React.FC<Props> = ({ context, mode }) => {
  if (!mode || !allowedRoutes.includes(mode)) {
    return <Redirect to="/" />;
  }

  return (
    <StyledPanel>
      <Navigation />
      <PanelBody>
        {mode === 'automatic' && <Automatic />}
        {mode === 'manual' && <Manual context={context} />}
      </PanelBody>
      <Footer />
      <Prompt message="The machine is still working... Are you sure you want to exit?" />
    </StyledPanel>
  );
};
