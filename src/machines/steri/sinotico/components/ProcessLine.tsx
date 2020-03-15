import React from 'react';
import styled, { css } from 'styled-components';
import { Path } from './Path';
import { pulseKeyframes } from './keyframes';

interface StyledProps {
  isOn?: boolean;
}
const StyledPath = styled(Path)<StyledProps>`
  stroke: ${({ isOn, theme }) => isOn && theme.blue600};
  stroke-width: ${({ isOn }) => isOn && '3px'};
  animation: ${({ isOn }) =>
    isOn &&
    css`
      ${pulseKeyframes} 1s linear infinite
    `};
`;

interface Props {
  d: string;
  isOn?: boolean;
}
export const ProcessLine: React.FC<Props> = ({ d, isOn }) => {
  return <StyledPath d={d} isOn={isOn} />;
};
