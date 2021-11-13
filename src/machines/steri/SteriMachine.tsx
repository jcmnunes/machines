import React from 'react';
import styled from 'styled-components';
import { useMachine } from '@xstate/react';
import { useParams } from 'react-router-dom';
import { automaticMachine } from './automatic/automatic.machine';
import { Panel } from './panel/Panel';
import { Flowsheet } from './flowsheet/Flowsheet';

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

interface Props {}

interface RouteParams {
  mode: string;
}

export const SteriMachine: React.FC<Props> = () => {
  const [current, send] = useMachine(automaticMachine);
  const { mode } = useParams<RouteParams>();

  return (
    <Wrapper>
      <Display>
        <InfoSection>
          <MachineName>Steri Machine</MachineName>

          <Panel context={current.context} mode={mode} />
        </InfoSection>

        <div>
          <Flowsheet context={current.context} />

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
