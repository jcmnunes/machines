import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface Props {}

const TABS = [
  {
    id: 'automatic',
    label: 'Automatic',
    goTo: '/steri/automatic',
  },
  {
    id: 'manual',
    label: 'Manual',
    goTo: '/steri/manual',
  },
];

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;

  > * + * {
    margin-left: 8px;
  }
`;

interface TabProps {
  active: boolean;
}
const Tab = styled.button<TabProps>`
  padding: 8px 12px;
  background-color: ${({ active, theme }) => (active ? theme.neutral075 : '#fff')};
  border-radius: 4px;

  &:disabled {
    color: ${({ theme }) => theme.neutral200};
    cursor: not-allowed;
  }
`;

export const Navigation: React.FC<Props> = () => {
  const history = useHistory();
  const { mode } = useParams();
  return (
    <Tabs>
      {TABS.map(({ id, label, goTo }) => (
        <Tab
          key={id}
          onClick={() => history.push(goTo)}
          active={mode === id}
        >
          {label}
        </Tab>
      ))}
    </Tabs>
  );
};
