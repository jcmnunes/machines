import React from 'react';
import styled from 'styled-components';
import { Switch } from '../components/Switch';
import { SteriContext } from '../../steriMachine';

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
      <Switch label="Feed pump" checked={context.feedPump} onChange={() => {}} />
      <Switch label="Gas Valve" checked={context.gasValve} onChange={() => {}} />
      <Switch label="Recir pump" checked={context.recirPump} onChange={() => {}} />
      <Switch label="Generator" checked={context.generator} onChange={() => {}} />
      <Switch label="Outlet pump" checked={context.outletPump} onChange={() => {}} />
      <Switch label="Lamp" checked={context.lamp} onChange={() => {}} />
    </StyledManual>
  );
};
