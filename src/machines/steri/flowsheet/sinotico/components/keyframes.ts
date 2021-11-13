import { keyframes } from 'styled-components';

export const spinKeyframes = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const pulseKeyframes = keyframes`
  0% {
    stroke-width: 2px;
  }
  
  30% {
    stroke-width: 3px;
  }
  
  100% {
    stroke-width: 2px;
  }
`;
