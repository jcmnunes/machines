import styled from 'styled-components';

interface PowerLightProps {
  isOn: boolean;
}
export const PowerLight = styled.div.attrs(({ isOn }: PowerLightProps) => ({
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
