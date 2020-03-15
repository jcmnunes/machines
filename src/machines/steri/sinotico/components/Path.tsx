import styled, { css } from 'styled-components';
import { spinKeyframes } from './keyframes';

export const Path = styled.path`
  stroke: ${({ theme }) => theme.neutral400};
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  transform-box: fill-box;
  transform-origin: center;
`;

interface PumpProps {
  isOn?: boolean;
}
export const Pump = styled(Path)<PumpProps>`
  stroke: ${({ isOn, theme }) => isOn && theme.blue600};
  animation: ${({ isOn }) =>
    isOn &&
    css`
      ${spinKeyframes} 1s ease infinite
    `};
`;

interface ReactorLevelProps {
  isOn?: boolean;
}
export const ReactorLevel = styled(Path)<ReactorLevelProps>`
  fill: ${({ isOn, theme }) => isOn && theme.yellow500};
`;
