import React from 'react';
import styled from 'styled-components';
import { Path, Pump, ReactorLevel } from './components/Path';
import { PATHS } from './Sinotico.constants';
import { ProcessLine } from './components/ProcessLine';
import { Lamp } from './components/Lamp';
import { SteriContext } from '../../automatic/automatic.machine';

const StyledSinotico = styled.svg`
  margin: 12px 0;
`;

interface Props {
  context: SteriContext;
}

export const Sinotico: React.FC<Props> = ({ context }) => {
  return (
    <StyledSinotico
      id="sinotico"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 380"
      width="500px"
      height="380px"
    >
      <ProcessLine d={PATHS.outputLine} isOn={context.outletPump} />
      <ProcessLine d={PATHS.outletLine2} isOn={context.outletPump} />
      <ProcessLine d={PATHS.outletLine1} isOn={context.outletPump} />
      <Lamp d={PATHS.uvLamp} isOn={context.outletPump} />
      <Pump d={PATHS.outletPump} isOn={context.outletPump} />

      <ProcessLine d={PATHS.feedLine2} isOn={context.feedPump} />
      <ProcessLine d={PATHS.feedLine1} isOn={context.feedPump} />
      <Pump d={PATHS.feedPump} isOn={context.feedPump} />

      <ProcessLine d={PATHS.recirOutLine} isOn={context.recirPump} />
      <ProcessLine d={PATHS.recirInLine} isOn={context.recirPump} />
      <Pump d={PATHS.recirPump} isOn={context.recirPump} />

      <Path d={PATHS.feedLiquid} />
      <Path d={PATHS.feedTank} />
      <Path d={PATHS.ozoneGenerator} />
      <ReactorLevel d={PATHS.reactorHighLevel} />
      <ReactorLevel d={PATHS.reactorLowLevel} isOn />
      <Path d={PATHS.inputLine} />
      <Path d={PATHS.oxygenValve} />
      <Path d={PATHS.oxygenFeedLine1} />
      <Path d={PATHS.oxygenFeedLine2} />
      <Path d={PATHS.ozoneFeedLine} />
      <Path d={PATHS.reactor} />
      <Path d={PATHS.lightningIcon} />
      <Path d={PATHS.bulbIcon} />
    </StyledSinotico>
  );
};
