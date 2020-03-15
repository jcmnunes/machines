import React from 'react';
import styled from 'styled-components';

export const IndicatorsRow = styled.div`
  display: flex;
  flex-direction: row;

  > * + * {
    margin-left: 12px;
  }
`;

const StyledIndicator = styled.div`
  width: 114px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.neutral300};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.neutral300};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.neutral300};
  height: 26px;
  text-align: center;
  text-transform: uppercase;
`;

const ValueWrapper = styled.div`
  padding: 0 12px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  label: string;
}

export const Indicator: React.FC<Props> = ({ label, children }) => {
  return (
    <StyledIndicator>
      <Label>{label}</Label>
      <ValueWrapper>{children}</ValueWrapper>
    </StyledIndicator>
  );
};
