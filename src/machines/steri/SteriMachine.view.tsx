import React from 'react';
import styled from 'styled-components';
import { useMachine } from '@xstate/react';
import { Sinotico } from './sinotico/Sinotico';
import { steriMachine } from './steriMachine';
import { IndicatorsRow, Indicator } from './sinotico/components/Indicator';
import { Panel } from './panel/Panel';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.neutral050};
`;

const Display = styled.div`
  width: 1000px;
  height: 650px;
  border-radius: 16px;
  background: #fff;
  padding: 64px;
  display: flex;
  flex-direction: row;
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

const MachineName = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.neutral400};
  margin: 16px 0 32px;
`;

interface PowerLightProps {
  isOn: boolean;
}
const PowerLight = styled.div.attrs(({ isOn }: PowerLightProps) => ({
  children: isOn ? 'ON' : 'OFF',
}))<PowerLightProps>`
  color: ${({ isOn, theme }) => (isOn ? theme.green500 : theme.neutral300)};
  background-color: ${({ isOn, theme }) => (isOn ? theme.green100 : theme.neutral075)};
  border: ${({ isOn, theme }) =>
    isOn ? `1px solid ${theme.green500}` : `1px solid ${theme.neutral075}`};
  font-weight: ${({ isOn }) => (isOn ? 700 : 400)};
  font-size: 14px;
  width: 36px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {}

export const SteriMachineView: React.FC<Props> = () => {
  const [current, send] = useMachine(steriMachine);

  return (
    <Wrapper>
      <Display>
        <InfoSection>
          <MachineName>Steri Machine</MachineName>
          <Panel context={current.context} />
        </InfoSection>

        <div>
          <IndicatorsRow>
            <Indicator label="Test">
              <PowerLight isOn={current.context.gasValve} />
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

          <Sinotico context={current.context} />

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

          <div>
            <button type="button" onClick={() => send('START')}>
              Start filling
            </button>
            <button type="button" onClick={() => send('FILLING_SUCCESS')}>
              Start steri
            </button>
            <button type="button" onClick={() => send('STERI_SUCCESS')}>
              Start emptying
            </button>
            <button type="button" onClick={() => send('EMPTYING_SUCCESS')}>
              Finish emptying
            </button>
          </div>
        </div>
      </Display>
    </Wrapper>
  );
};
