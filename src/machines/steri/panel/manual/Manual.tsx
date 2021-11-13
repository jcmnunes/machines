import React from 'react';
import styled from 'styled-components';
import { Switch } from '@binarycapsule/ui-capsules';
import { SteriContext } from '../../automatic/automatic.machine';

const StyledManual = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;

  > * {
    width: 50%;
    margin-bottom: 12px;
  }
`;

interface Props {
  context: SteriContext;
}

export const Manual: React.FC<Props> = ({ context }) => {
  return (
    <StyledManual>
      <Switch checked={context.feedPump} onChange={() => {}}>
        Feed pump
      </Switch>
      <Switch checked={context.gasValve} onChange={() => {}}>
        Gas Valve
      </Switch>
      <Switch checked={context.recirPump} onChange={() => {}}>
        Recir pump
      </Switch>
      <Switch checked={context.generator} onChange={() => {}}>
        Generator
      </Switch>
      <Switch checked={context.outletPump} onChange={() => {}}>
        Outlet pump
      </Switch>
      <Switch checked={context.lamp} onChange={() => {}}>
        Lamp
      </Switch>
    </StyledManual>
  );
};
