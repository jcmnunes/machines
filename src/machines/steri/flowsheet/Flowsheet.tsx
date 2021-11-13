import React from 'react';
import { Indicator, IndicatorsRow } from './sinotico/components/Indicator';
import { Sinotico } from './sinotico/Sinotico';
import { PowerLight } from './sinotico/components/PowerLight';
import { SteriContext } from '../automatic/automatic.machine';

interface Props {
  context: SteriContext;
}

export const Flowsheet: React.FC<Props> = ({ context }) => {
  return (
    <div>
      <IndicatorsRow>
        <Indicator label="Test">
          <PowerLight isOn={context.gasValve} />
        </Indicator>
        <Indicator label="Test">
          <div>123</div>
        </Indicator>
        <Indicator label="Test">
          <div>123</div>
        </Indicator>
        <Indicator label="Test">
          <div>123</div>
        </Indicator>
      </IndicatorsRow>

      <Sinotico context={context} />

      <IndicatorsRow>
        <Indicator label="Test">
          <div>123</div>
        </Indicator>
        <Indicator label="Test">
          <div>123</div>
        </Indicator>
        <Indicator label="Test">
          <div>123</div>
        </Indicator>
        <Indicator label="Test">
          <div>123</div>
        </Indicator>
      </IndicatorsRow>
    </div>
  );
};
