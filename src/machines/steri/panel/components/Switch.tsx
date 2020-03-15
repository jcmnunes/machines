import React from 'react';
import RSwitch from 'react-switch';
import styled from 'styled-components';
import { theme } from '@binarycapsule/ui-capsules';

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LabelText = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

interface Props {
  label: string;
  checked: boolean;
  onChange(): void;
}

export const Switch: React.FC<Props> = ({ label, checked, onChange }) => {
  return (
    <Label>
      <RSwitch
        checked={checked}
        onChange={onChange}
        width={28}
        height={16}
        handleDiameter={14}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={`${theme.green500}`}
        offColor={`${theme.neutral300}`}
      />
      <LabelText>{label}</LabelText>
    </Label>
  );
};
