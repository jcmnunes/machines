import React from 'react';
import styled from 'styled-components';
import { Path } from './Path';

interface StyledProps {
  isOn?: boolean;
}
const StyledPath = styled(Path)<StyledProps>`
  stroke: ${({ isOn, theme }) => isOn && theme.blue600};
  fill: ${({ isOn, theme }) => isOn && theme.blue050};
`;

interface Props {
  d: string;
  isOn?: boolean;
}
export const Lamp: React.FC<Props> = ({ d, isOn }) => {
  return <StyledPath d={d} isOn={isOn} />;
};
